import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  num=''
  name=''
  pswd=''

  constructor(private router:Router){}

  ngOnInit(): void {
    
  }

  register(){
    var number = this.num;
    var name = this.name;
    var password = this.pswd;

    localStorage.setItem('number',number);
    localStorage.setItem('name',name);
    localStorage.setItem('password',password);

    Swal.fire("Register Successfully",'Thank you','success').then((result)=>{
      if(result.value){
        this.router.navigateByUrl('login')
      }
    })
  }

}
