import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Bus } from 'src/app/model/bus.interface';
import { Conductor } from 'src/app/model/conductor.interface';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-create-bus-dialog',
  templateUrl: './create-bus-dialog.component.html',
  styleUrls: ['./create-bus-dialog.component.css']
})
export class CreateBusDialogComponent implements OnInit  {

  drivers: Conductor[] = [];
  bus: Bus;

  ownerForm = new UntypedFormGroup({
    code : new UntypedFormControl('', Validators.required),
    passengers : new UntypedFormControl('', Validators.required),
    conductor : new UntypedFormControl('', Validators.required)
  });

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef, private parkingService: ParkingService){

    this.bus={
      code:'',
      conductorFk: undefined,
      passengers: 0
    }

  }


  ngOnInit(): void {
    this.parkingService.getAllDrivers().subscribe({
      next: (value) => {
        this.drivers = value;
      },
      error: (err) => {
          console.error(`Error ${err.message}`);
      },
    });

  }

  onSave(): void{

    this.parkingService.saveBus(this.bus).subscribe({
      next: (value) => {
        if(value.httpStatus == 'CREATED'){
          this.ref.close();
        }
      },
      error: (err) => {
          console.error('Error ' , err.message);
      },

    });


  }


}
