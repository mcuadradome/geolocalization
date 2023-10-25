import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/services/position.service';
import * as L from 'leaflet';
import { Municipality } from 'src/app/model/municipality.interface';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CarPark } from 'src/app/model/carpark.interface';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Bus } from 'src/app/model/bus.interface';
import { Conductor } from 'src/app/model/conductor.interface';
import { ParkingService } from 'src/app/services/parking.service';
import { CreateDriverDialogComponent } from './create-driver-dialog/create-driver-dialog.component';
import { CreateBusDialogComponent } from './create-bus-dialog/create-bus-dialog.component';
import { MessageService } from 'primeng/api';
import { ResponseVO } from 'src/app/model/response/response.interface';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-open-map-dialog',
  templateUrl: './open-map-dialog.component.html',
  styleUrls: ['./open-map-dialog.component.css']
})
export class OpenMapDialogComponent implements OnInit {
  map: L.Map | any;
  municipality: Municipality;
  carPark: CarPark;
  buses: Bus[] = [];
  drivers: Conductor[] = [];
  availablesCarParks: CarPark[]=[];
  loading = false;

  ownerForm = new UntypedFormGroup({
    origen : new UntypedFormControl('', Validators.required),
    destino : new UntypedFormControl('', Validators.required),
    departureTime : new UntypedFormControl('', Validators.required),
    arrivalTime : new UntypedFormControl(0, Validators.required),
    timeOfStay :  new UntypedFormControl({value: 0, disabled: true}),
    bus:  new UntypedFormControl(null, Validators.required ),
    conductor:  new UntypedFormControl({value: null, disabled: true}, Validators.required ),
  });


  constructor(private positionService: PositionService, public config: DynamicDialogConfig,
              private ref: DynamicDialogRef, private parkingService: ParkingService, private dialogService: DialogService,
              private messageService: MessageService, private utils: Utils){

  this.municipality = this.config.data.municipality;
  console.log(this.municipality);

  this.carPark={
    arrivalTime: this.utils.parseActualTime(),
    departureTime: this.utils.parseActualTime(),
    busFk:{
      code:'',
      carParkList:[],
      passengers:0,
      conductorFk:{
        name:''
      }
    },
    destino:'',
    municipalityFk: this.municipality,
    origen :'',
    timeOfStay: 0
  }

  }


  ngOnInit(): void {
   this.initializeMap();

   const lat = Number.parseFloat(this.municipality.lat);
   const long = Number.parseFloat(this.municipality.lon);

    this.positionService.getPosition(lat, long).subscribe({
      next: (data) => {
        const city = data.display_name;
        L.marker([lat, long])
          .addTo(this.map)
          .bindPopup(`<b>${city}</b>`)
          .openPopup();
      },
    });

    this.parkingService.getAllBuses().subscribe({
      next: (value) => {
        this.buses = value;
      },
      error: (err) => {
          console.error(`Error ${err.message}`);
      },
    });

    this.parkingService.getAllDrivers().subscribe({
      next: (value) => {
        this.drivers = value;
      },
      error: (err) => {
          console.error(`Error ${err.message}`);
      },
    });

    this.parkingService.getAllByMunicipality(this.carPark.municipalityFk.id).subscribe({
      next: (value) => {
         this.availablesCarParks = value;
      },
    });

  }

  updateDepartureTime(): void{
    const arrivalTime = this.utils.parseActualDateTime(this.carPark.arrivalTime);
    const departureTime = this.utils.parseActualDateTime(this.carPark.departureTime);

    const hour = this.utils.getMinutes(arrivalTime, departureTime);
    this.carPark.timeOfStay = hour;
  }

  opneDialogDriver(){
    const ref = this.dialogService.open(CreateDriverDialogComponent, {
      header: 'Crear conductor',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });

    ref.onClose.subscribe((response: ResponseVO) => {
      if (response) {
        this.messageService.add({ severity: response.httpStatus != 'OK' ? 'error' : 'info',
         summary: 'Mensaje', detail: response.message, key: 'dialog-map'});
      }
    });
  }

  openDialogBus(){
    const ref = this.dialogService.open(CreateBusDialogComponent, {
      header: 'Crear Bus',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });

    ref.onClose.subscribe((response: ResponseVO) => {
      if (response) {
        this.messageService.add({ severity: response.httpStatus != 'OK' ? 'error' : 'info' ,
         summary: 'Mensaje', detail: response.message, key: 'dialog-map'});
      }
    });

  }

  onCreate(): void{

    const arrivalTime = this.utils.parseActualDateTime(this.carPark.arrivalTime);
    const departureTime = this.utils.parseActualDateTime(this.carPark.departureTime);

    this.carPark.arrivalTime= this.utils.formatDate(arrivalTime) ;
    this.carPark.departureTime = this.utils.formatDate(departureTime);

    this.loading = true;
    this.parkingService.create(this.carPark).subscribe({
      next: (value) => {
        this.loading = false;
          if(value.httpStatus === 'CREATED'){
            this.messageService.add({severity:'success', summary:'Mensaje',
             detail: value.message, key: 'dialog-map'});
              this.availablesCarParks.push(value.result);
              console.log(this.availablesCarParks);
          }else{
            this.messageService.add({severity:'success', summary:'Mensaje',
             detail:value.message, key: 'dialog-map'});

          }
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
      },


    });

  }

  validate(carPark: CarPark){



  }


  initializeMap() {
    this.map = L.map('mapa').setView([4.6097, -74.0817], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }
}
