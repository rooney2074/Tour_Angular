import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  places:any=[];
  user:any=[]

  constructor(private router:Router,private db:DataService) {}

  ngOnInit(): void {
    this.user=localStorage.getItem('name')

    this.db.get().subscribe(
      (result:any)=>{
        this.places=result.products
      }
    )
  }

  book(i:any){

    if(this.user==null){
      Swal.fire("please login first",'Go to login page','warning')
    }else{
      this.db.book(i)
      this.router.navigateByUrl('/show')
    }
    
  }

}
