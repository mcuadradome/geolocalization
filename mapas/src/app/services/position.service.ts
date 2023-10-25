import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {


  constructor(private http: HttpClient){
  }


    public getPosition(lat: number, lon: number): Observable<any> {
      const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=16&addressdetails=1`;
      return this.http.get<any>(apiUrl);
    }


}
