import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44359/api/';
  constructor(private httpClient:HttpClient) { }

  getColorAll():Observable<ListResponseModel<Color>>{
    let newPathColor = this.apiUrl + "colors/getcolorall"
    return this.httpClient.get<ListResponseModel<Color>>(newPathColor);
  }
}
