import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Conductor } from 'src/app/model/conductor.interface';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-create-driver-dialog',
  templateUrl: './create-driver-dialog.component.html',
  styleUrls: ['./create-driver-dialog.component.css']
})
export class CreateDriverDialogComponent {

  name: string ='';

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef, private parkingService: ParkingService ){

  }

  onSave(): void{

    const conductor: Conductor ={
      name: this.name
    }

    this.parkingService.saveConductor(conductor).subscribe({
      next: (value) => {

      },
      error: (err) => {
          console.error('Error ' , err.message);
      },

    });


  }

}
