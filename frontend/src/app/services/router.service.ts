import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }
  toUser(){
    this.router.navigate(['userdashboard'])
  }
  toLogin(){
    this.router.navigate(['login'])
  }
  toAdmin(){
  this.router.navigate(['admindashboard'])
  }
  toCrud(){
    this.router.navigate(['crud'])
  }
  toChat(){
    this.router.navigate(['chat'])
  }
  toadduser(){
    this.router.navigate(['adduser'])
  }
  toupdateuser(){
    this.router.navigate(['updateuser'])
  }
}
