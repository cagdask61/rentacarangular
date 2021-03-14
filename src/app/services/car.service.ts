import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44359/api/";
  
  constructor(private httpClient:HttpClient) {}

   getCarsDetails():Observable<ListResponseModel<Car>>{
     let newPathCar  = this.apiUrl + "cars/getcardetail"
     return this.httpClient.get<ListResponseModel<Car>>(newPathCar);
   }

   getCarsByColor(colorId:Number):Observable<ListResponseModel<Car>>{
     let newPathCarColor = this.apiUrl + "cars/getcarsbycolor/colorid/"+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPathCarColor);
   }

   getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPathCarBrand = this.apiUrl + "cars/getcarsbybrand/brandid/" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPathCarBrand);
   }

}
