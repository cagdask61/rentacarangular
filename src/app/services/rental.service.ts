import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44359/api/";
  constructor(private httpClient:HttpClient) { }

  getRentalDetailService():Observable<ListResponseModel<Rental>>{
    let newPathRental = this.apiUrl + "rentals/getrentaldetail"
    return this.httpClient.get<ListResponseModel<Rental>>(newPathRental);
  }
}
