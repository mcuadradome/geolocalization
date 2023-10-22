import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/app/services/parking.service';
import { Municipality } from 'src/app/model/municipality.interface';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { OpenMapDialogComponent } from './open-map-dialog/open-map-dialog.component';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
})
export class ParkingComponent implements OnInit {

  ref: DynamicDialogRef | undefined;
  municipalities: Municipality[] = [];

  // mapInstance: any;
  // map: L.Map | any;

  constructor(private parkingService: ParkingService, public dialogService: DialogService ) {
    //  this.mapInstance = SingletonLeafletMap.getInstance();
    //  this.map = this.mapInstance.getMap();
  }

  ngOnInit(): void {
    this.parkingService.getAllMunicipality().subscribe({
      next: (value) => {
          this.municipalities = value;
      },
    })

  }

  open(municipality: Municipality){
    this.ref = this.dialogService.open(OpenMapDialogComponent, {
      data: {
        municipality: municipality,
      },
      header: `Detalles ${municipality.name}`,
      width: '80%',
      height: '90%',
  });



  }


}
