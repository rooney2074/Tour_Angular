import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user:any=[]

  constructor(){}

  ngOnInit(): void {
    this.user=localStorage.getItem('name');
    window.location.reload;
  }

  logout(){

    Swal.fire({
      title: 'Are you Sure You Want To Log Out',
      text: 'Your Data Will Be Removed',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
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
