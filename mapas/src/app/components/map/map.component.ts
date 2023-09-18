import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { City } from 'src/app/model/punto.interface';
import { Graph } from 'src/app/utils/graph';
import { Utils } from 'src/app/utils/utils';
import { DialogMapComponent } from './dialog-map/dialog-map.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {

  cities: City[] = [];
  city!: City;
  ref: DynamicDialogRef | undefined;

  constructor(private utils: Utils, public dialogService: DialogService,) {

  }

  ngOnInit() {

    this.cities = [
      { nombre: "Bogotá", latitud: 4.6097, longitud: -74.0817, peso: this.utils.getRandomWeight(1, 5) },
      { nombre: "Cali", latitud: 3.4516, longitud: -76.5320, peso: this.utils.getRandomWeight(1, 5) },
      { nombre: "Barranquilla", latitud: 10.9639, longitud: -74.7962, peso: this.utils.getRandomWeight(1, 5) },
      { nombre: "Cartagena", latitud: 10.3910, longitud: -75.4794, peso: this.utils.getRandomWeight(1, 5) },
      { nombre: "Santa Marta", latitud: 11.2471, longitud: -74.2017, peso: this.utils.getRandomWeight(1, 5) },
      { nombre: "Bucaramanga", latitud: 7.1254, longitud: -73.1198, peso: this.utils.getRandomWeight(1, 5) },
      { nombre: "Popayan", latitud: 2.4574701, longitud: -76.6411337, peso: this.utils.getRandomWeight(1, 5) },
      { nombre: "Manizales", latitud: 5.0707, longitud: -75.5138, peso: this.utils.getRandomWeight(1, 5) },
      { nombre: "Cúcuta", latitud: 7.8854, longitud: -72.5033, peso: this.utils.getRandomWeight(1, 5) },
      { nombre: "Medellín", latitud: 6.2442, longitud: -75.5812, peso: this.utils.getRandomWeight(1, 5) },
    ];

    console.log(this.cities);

    this.city ={
      nombre: '',
      peso: 0,
      latitud: 0,
      longitud: 0,
    }

  }



  add(): void {

    const oCity ={
      nombre: this.city.nombre,
      peso: this.city.peso,
      latitud: this.city.latitud,
      longitud: this.city.longitud
    }

    this.cities.push(oCity);

  }

  calculated(): void {

    const graph = new Graph(this.cities);

    const startVertex = this.cities[0].nombre;
    const shortestDistances = graph.dijkstra(startVertex);
    console.log(
      `Shortest distances from vertex ${startVertex}:`,
      shortestDistances
    );

    const result = graph.nearestNeighborTSPWithEffort(this.cities);

    this.ref = this.dialogService.open(DialogMapComponent, {
      header: 'Detalles',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: result
  });

  this.ref.onClose.subscribe((response: any) => {
  });

    // for (const [key, value] of shortestDistances) {

    //   const findCity = this.cities.find(c => c.nombre === key);
    //   console.log(`Key: ${key}, Value: ${value}`);
    //   if(findCity != undefined) {
    //     L.marker([findCity.latitud, findCity.longitud])
    //     .addTo(this.map)
    //     .bindPopup(`<b>${findCity.nombre}</b>`)
    //     .openPopup();
    //   }


    // }

    // const latlngs = this.cities.map(ciudad => L.latLng(ciudad.latitud, ciudad.longitud));

    // this.cities.forEach((item, index) =>{
    //   L.marker([item.latitud, item.longitud])
    //   .addTo(this.map)
    //   .bindPopup(`<b>${item.nombre}</b>`)
    //   .openPopup();
    // });

    // Agregar polilínea que conecta las ciudades

  }

  clean(){
    this.cities = [];
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}

}
