import { Injectable } from '@angular/core';
import { BrandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44359/api/brands/getbrandall';

  constructor(private httpClient:HttpClient) { }

  getBrandAll():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
