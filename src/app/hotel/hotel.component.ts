import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  data:any=[];
  user:any=localStorage.getItem('name')

  constructor(private db:DataService,private router:Router){}

  ngOnInit(): void {
    this.db.hotel().subscribe(
      (result:any)=>{
        this.data=result.products
      }
    )
  }

  book(i:any){
    if(this.user==null){
      Swal.fire({
      title: 'please login first',
      text: 'Go to login page',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
      }).then((result)=>{
        if(result.value){
          this.router.navigateByUrl('login')
        }else{
          window.location.reload()
        }
      })
    }else{
      this.db.book(i);
      this.router.navigateByUrl('/show')
    }
  }

}
