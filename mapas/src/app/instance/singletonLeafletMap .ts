import * as L from 'leaflet';

class SingletonLeafletMap {
  private static instance: SingletonLeafletMap;
  private map: L.Map | any;

  private constructor() {
    // Configura el mapa Leaflet
    this.map = L.map('mapa').setView([4.6097, -74.0817], 12); // Cambia las coordenadas iniciales y el nivel de zoom según tus necesidades
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  public static getInstance(): SingletonLeafletMap {
    if (!SingletonLeafletMap.instance) {
      SingletonLeafletMap.instance = new SingletonLeafletMap();
    }
    return SingletonLeafletMap.instance;
  }

  public getMap(): L.Map {
    return this.map;
  }

  public addMarker(latitude: number, longitude: number): void {
    L.marker([latitude, longitude]).addTo(this.map);
  }
}

export default SingletonLeafletMap;
