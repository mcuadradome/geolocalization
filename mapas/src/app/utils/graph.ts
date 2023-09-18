import { City } from "../model/punto.interface";

export class Graph {
  private cities: City[];

  constructor(cities: City[]) {
    this.cities = cities;
  }

  private calculateDistance(city1: City, city2: City): number {
    const earthRadiusKm = 6371; // Radio de la Tierra en kilómetros
    const dLat = this.degreesToRadians(city2.latitud - city1.latitud);
    const dLon = this.degreesToRadians(city2.longitud - city1.longitud);
    const lat1 = this.degreesToRadians(city1.latitud);
    const lat2 = this.degreesToRadians(city2.latitud);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusKm * c;
  }

  private degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  dijkstra(startCity: string): Map<string, number> {
    const distances: Map<string, number> = new Map();
    const unvisitedCities: Set<string> = new Set();

    for (const city of this.cities) {
      distances.set(city.nombre, Infinity);
      unvisitedCities.add(city.nombre);
    }

    distances.set(startCity, 0);

    while (unvisitedCities.size > 0) {
      const currentCity = this.getMinDistanceCity(distances, unvisitedCities);
      unvisitedCities.delete(currentCity);

      for (const city of this.cities) {
        if (
          unvisitedCities.has(city.nombre) &&
          distances.get(currentCity)! + this.calculateDistance(this.getCityByName(currentCity), city) <
            distances.get(city.nombre)!
        ) {
          distances.set(
            city.nombre,
            distances.get(currentCity)! + this.calculateDistance(this.getCityByName(currentCity), city)
          );
        }
      }
    }

    return distances;
  }

  private getMinDistanceCity(distances: Map<string, number>, unvisitedCities: Set<string>): string {
    let minDistance = Infinity;
    let minCity = '';

    for (const city of unvisitedCities) {
      if (distances.get(city)! < minDistance) {
        minDistance = distances.get(city)!;
        minCity = city;
      }
    }

    return minCity;
  }

  private getCityByName(name: string): City {
    return this.cities.find((city) => city.nombre === name)!;
  }

  nearestNeighborTSPWithEffort(cities: City[]): City[] {
    const n = cities.length;
    const visited: boolean[] = new Array(n).fill(false);
    const tour: City[] = [];
    let currentCity = cities[0]; // Comenzamos desde la primera ciudad

    visited[0] = true;
    tour.push(currentCity);

    for (let i = 1; i < n; i++) {
      let nearestCity: City | null = null;
      let minAdjustedDistance = Number.MAX_VALUE;

      for (let j = 0; j < n; j++) {
        if (!visited[j]) {
          const distance = Math.sqrt(
            Math.pow(currentCity.latitud - cities[j].latitud, 2) + Math.pow(currentCity.longitud - cities[j].longitud, 2)
          );
          // Ajusta la distancia en función del esfuerzo entre ciudades
          const adjustedDistance = distance * (1 + cities[j].peso);

          if (adjustedDistance < minAdjustedDistance) {
            minAdjustedDistance = adjustedDistance;
            nearestCity = cities[j];
          }
        }
      }

      if (nearestCity) {
        visited[cities.indexOf(nearestCity)] = true;
        tour.push(nearestCity);
        currentCity = nearestCity;
      }
    }

    // Regresar al punto de partida para cerrar el ciclo
    tour.push(tour[0]);

    return tour;
  }
}
