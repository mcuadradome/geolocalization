import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { City } from 'src/app/model/punto.interface';

@Component({
  selector: 'app-dialog-map',
  templateUrl: './dialog-map.component.html',
  styleUrls: ['./dialog-map.component.css'],
})
export class DialogMapComponent implements OnInit {
  cities: City[] = [];
  map: L.Map | any;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef) {
    this.cities = this.config.data;
    console.log(
      `Shortest distances from distance:`,
      this.cities
    );
  }

  ngOnInit() {
    this.initializeMap();
    this.cities.forEach((item) => {
      L.marker([item.latitud, item.longitud])
        .addTo(this.map)
        .bindPopup(`<b>${item.nombre}</b>`)
        .openPopup();
    });

    const latlngs = this.cities.map((ciudad) =>
      L.latLng(ciudad.latitud, ciudad.longitud)
    );
    L.polyline(latlngs, { color: 'blue'  }).addTo(this.map);
  }

  initializeMap() {
    this.map = L.map('mapa').setView([4.6097, -74.0817], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }
}
