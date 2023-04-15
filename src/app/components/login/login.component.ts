import { Component } from '@angular/core';
import {AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

declare const swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  private token:string = '';
  public warning:string = '';

  public email:string='';
  public password:string = '';


constructor(private authService:AuthService,
  private router:Router
  ){

}

login(){

  this.authService.login(this.email , this.password).subscribe(rta =>{
    this.token = rta.access_token;
    localStorage.setItem('email' , rta.email);
    localStorage.setItem('token_session' , this.token);
    this.router.navigate(['products'])
  },(error)=>{
    if (error.error.status === 401) {
      this.warning = error.error.message;
      swal.fire({
        icon: 'error',
        title: 'Usuario no autorizado',
        text: `${error.error.message}`,
      })
    }else{
      this.warning = '';
    }
  }
  )
  }





}
function getProducts() {
  throw new Error('Function not implemented.');
}

