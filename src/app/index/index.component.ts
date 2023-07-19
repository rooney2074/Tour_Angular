import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  selectedCity1:any
  cities = [
    {
      name:'New York',
      lat:'40.73',
      lon:'-73.93'
    },
    {
      name:'Paris',
      lat:'48.864716',
      lon:'2.349014'
    },
    {
      name:'Tokyo',
      lat:'35.652832',
      lon:'139.839478'
    },
    {
      name:'Sydney',
      lat:'-33.865143',
      lon:'151.209900'
    },
    {
      name:'Dubai',
      lat:'25.276987',
      lon:'55.296249'
    },
    {
      name:'Bali',
      lat:'-8.409518',
      lon:'115.188919'
    },
    {
      name:'Rome',
      lat:'41.902782',
      lon:'12.496366'
    },
    {
      name:'Cape Town',
      lat:'-33.918861',
      lon:'18.423300'
    },
    {
      name:'Amsterdam',
      lat:'52.377956',
      lon:'4.897070'
    },
    {
      name:'Rio de Janeiro',
      lat:'-22.908333',
      lon:'-43.196388'
    },
    {
      name:'Barcelona',
      lat:'41.390205',
      lon:'2.154007'
    },
    {
      name:'Cusco',
      lat:'77.696205',
      lon:'12.934885'
    },
    {
      name:'Krabi',
      lat:'7.900544',
      lon:'98.985268'
    },
    {
      name:'San Francisco',
      lat:'37.733795',
      lon:'-122.446747'
    },
    {
      name:'Seoul',
      lat:'37.532600',
      lon:'127.024612'
    },
    {
      name:'Cape Verde',
      lat:'16.095011',
      lon:'-22.807835'
    },
    {
      name:'Budapest',
      lat:'47.526642',
      lon:'19.046394'
    },
    {
      name:'Hawaii',
      lat:'19.741755',
      lon:'-155.844437'
    },
    {
      name:'Queenstown',
      lat:'-45.031162',
      lon:'168.662643'
    },
    {
      name:'Santorini',
      lat:'36.393154',
      lon:'25.461510'
    }
  ]
  lat=40.730610;
  lon=-73.935242;
  weather:any;
  options:any;
  overlays:any;
  gallery:any=[]

  user:any=[]


  constructor(private router:Router,private db:DataService) {}

  ngOnInit(): void {

    this.user=localStorage.getItem('name');
    console.log(this.user);

    this.selectedCity1={
      name:'New York',
      lat:'40.730610',
      lon:'-73.935242'
    }

    this.options={
      center:{lat:Number(this.lat),lon:Number(this.lon)},
      zoom:12
    }
    
    this.db.getweather(this.lat,this.lon).subscribe((res:any)=>{
      this.weather = res;
      console.log(this.weather)
    })

  }

  select(){
    console.log(this.selectedCity1)

    this.lat = this.selectedCity1.lat;
    this.lon = this.selectedCity1.lon;

    this.db.getweather(this.lat,this.lon).subscribe((res:any)=>{
      this.weather = res;
      console.log(res)
    })
  }

  logout(){

    Swal.fire({
      title: 'Are you Sure You Want To Log Out',
      text: 'Your Data Will Be Removed',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'No'
    }).then((result)=>{
      if(result.value){
        localStorage.removeItem('name');
        window.location.reload()
      }
    })
    // localStorage.removeItem('name');
    // Swal.fire("You Have Been Logged Out!!!",'logged Out','warning')
    // window.location.reload()
  }

}
