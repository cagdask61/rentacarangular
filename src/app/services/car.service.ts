import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44359/api/cars/getcardetail';
  
  constructor(private httpClient:HttpClient) {}

   getCarsDetails():Observable<CarResponseModel>{
     return this.httpClient.get<CarResponseModel>(this.apiUrl);
   }

}
