import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorReponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44359/api/colors/getcolorall';
  constructor(private httpClient:HttpClient) { }

  getColorAll():Observable<ColorReponseModel>{
    return this.httpClient.get<ColorReponseModel>(this.apiUrl);
  }
}
