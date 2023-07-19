import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  booknow:any=[]
   
  constructor(private http:HttpClient){}


  get(){
    return this.http.get('http://localhost:3000/place')
  }

  book(i:any){
    this.booknow=i;
  }

  getweather(lat:any,lon:any){
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e8c05d42fa99e65de05c954c4e036c08`)
  }


  //other 

  holiday(){
    return this.http.get('http://localhost:3000/holiday')
  }

  hotel(){
    return this.http.get('http://localhost:3000/hotel')
  }

  business(){
    return this.http.get('http://localhost:3000/business')
  }

  purpose(){
    return this.http.get('http://localhost:3000/purpose')
  }


}