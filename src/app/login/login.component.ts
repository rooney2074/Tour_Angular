import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name=''
  num=''
  pswd=''

  constructor(private toaster:ToastrService,private router:Router){}

  ngOnInit(): void {
    
  }

  login()
{

  if(this.name==localStorage.getItem('name')){
    // this.toaster.success('Login successful');
  Swal.fire("Login Successful",'Thank You..','success').then((result)=>{
    if(result.value){
      
      this.router.navigateByUrl('').then((result)=>{
        if(result){
          window.location.reload()
        }
      })
    }
  })
  

  }
}
}
