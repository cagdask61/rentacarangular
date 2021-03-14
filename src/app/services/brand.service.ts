import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44359/api/';

  constructor(private httpClient:HttpClient) { }

  getBrandAll():Observable<ListResponseModel<Brand>>{
    let newPathBrand = this.apiUrl + "brands/getbrandall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPathBrand);
  }
}
