import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../common/constants';
import { Municipality } from '../model/municipality.interface';
import { Conductor } from '../model/conductor.interface';
import { Bus } from '../model/bus.interface';
import { CarPark } from '../model/carpark.interface';
import { ResponseVO } from '../model/response/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private constants: Constants) { }

  public getAllMunicipality(): Observable<Municipality[]> {
    return this.http.get<Municipality[]>(this.constants.BASE_URI + '/municipality/getAll');
  }

  public getAllBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.constants.BASE_URI + '/bus/getAll');
  }

  public getAllDrivers(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(this.constants.BASE_URI + '/conductor/getAll');
  }

  public saveBus(bus: Bus): Observable<ResponseVO> {
    return this.http.post<ResponseVO>(this.constants.BASE_URI + '/bus', bus, {headers: this.cabeceras });
  }

  public saveConductor(conductor: Conductor): Observable<ResponseVO> {
    return this.http.post<ResponseVO>(this.constants.BASE_URI + '/conductor', conductor, {headers: this.cabeceras });
  }

  public create(carPark: CarPark): Observable<ResponseVO> {
    return this.http.post<ResponseVO>(this.constants.BASE_URI + '/carpark/create', carPark, {headers: this.cabeceras });
  }

  public getAllByMunicipality(municipalityId: number): Observable<CarPark[]> {
    return this.http.get<CarPark[]>(this.constants.BASE_URI +  `/carpark/getAllByMunicipality/${municipalityId}`);
  }

  public getCapacity(municipalityId: number): Observable<ResponseVO> {
    return this.http.get<ResponseVO>(this.constants.BASE_URI + `/countByMunicipalityId/${municipalityId}`);
  }







}
