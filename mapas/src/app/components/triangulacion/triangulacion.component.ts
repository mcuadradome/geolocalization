import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { delay } from 'rxjs';
import { Circle, City } from 'src/app/model/punto.interface';
import { PositionService } from 'src/app/services/position.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-triangulacion',
  templateUrl: './triangulacion.component.html',
  styleUrls: ['./triangulacion.component.css'],
})
export class TriangulacionComponent implements OnInit {
  map: L.Map | any;

  cities: any[] = [
    {
      latitud: 24.711454873635766,
      longitud: 46.67438218019588,
      distance: 977.69,
    },
    {
      latitud: 39.65467179595615,
      longitud: 66.97572083948319,
      distance: 2169.86,
    },
    {
      latitud: 40.78689100382049,
      longitud: 14.368456432286543,
      distance: 2749.4,
    },
  ];

  constructor(private utils: Utils, private positionService: PositionService) {}

  ngOnInit() {
    this.initializeMap();

    const circles: Circle[] = [];

    this.cities.forEach((item) => {
      const meters = this.utils.metrosAKilometros(item.distance);
      console.log(meters);

      this.positionService.getPosition(item.latitud, item.longitud).subscribe({
        next: (data) => {
          const city = data.display_name;

          L.marker([item.latitud, item.longitud])
            .addTo(this.map)
            .bindPopup(`<b>${city}</b>`)
            .openPopup();
        },
      });

      L.circle([item.latitud, item.longitud], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: meters,
      }).addTo(this.map);

      circles.push({ x: item.latitud, y: item.longitud, radius: meters });
    });

    const latlngs = this.cities.map((ciudad) =>
      L.latLng(ciudad.latitud, ciudad.longitud)
    );

    L.polyline(latlngs, { color: 'blue' }).addTo(this.map);

    console.log(circles);

    const centroidLat = (circles[0].x + circles[1].x + circles[2].x) / 3;
    const centroidLon = (circles[0].y + circles[1].y + circles[2].y) / 3;
    console.log('Posicion relativa', centroidLon, centroidLon);
    const redIcon = L.icon({
      iconUrl: '../../../assets/leaf-green.png',
      shadowUrl: '../../../assets/leaf-green.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
    });

    this.positionService.getPosition(centroidLat, centroidLon).subscribe({
      next: (data) => {
        const city = data.display_name;

        L.marker([centroidLat, centroidLon], { icon: redIcon } )
          .addTo(this.map)
          .bindPopup(`<b>${city}</b>`)
          .openPopup();
        this.map.setView([centroidLat, centroidLon], 4);
      },
    });

    // Agrega un marcador en el punto de intersección

    // }
  }

  initializeMap() {
    this.map = L.map('mapa').setView([4.6097, -74.0817], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }
}
