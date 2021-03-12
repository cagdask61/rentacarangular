import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  dataLoaded = false;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrandAll();
  }

  getBrandAll(){
    this.brandService.getBrandAll().subscribe(response=>{
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }
}
