import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user.module';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginShow:boolean=true;
  registerShow:boolean=false;
  adminshow:boolean=false;
  adminregisterShow:boolean=false;

  userinfo:User = new User();
  admininfo:User=new User();
  newuser:User = new User();
  newadmin:User=new User();

  constructor(private userService:UserService,private routerService : RouterService,private router : RouterService) { }
  loginForm = new FormGroup(
    {
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    }
  )
  adminForm = new FormGroup(
    {
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    }
  )
  userregisterForm = new FormGroup(
    {
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required])
    }
  )
  adminregisterForm=new FormGroup(
    {
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required])
    }
  )
 Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  login(){
    console.log("Form Login",this.loginForm.value.username);
    this.userinfo.userName = this.loginForm.value.username;
     this.userinfo.password = this.loginForm.value.password;
     this.userService.login(this.userinfo).subscribe(data =>{
       console.log(data);
       if(data===true){
        this.userService.username= this.userinfo.userName;
     this.routerService.toUser();
     this.Toast.fire({
      icon: 'success',
      title: 'login successfully'
    })
       }
     });
  }
  loginAsAdmin(){
    console.log("Form Login",this.adminForm.value.username);
    this.admininfo.userName = this.adminForm.value.username;
     this.admininfo.password = this.adminForm.value.password;
      this.userService.getAdmin(this.admininfo)
    .subscribe(data => {
        console.log(data)
        this.routerService.toAdmin();
        this.Toast.fire({
          icon: 'success',
          title: 'login successfully'
        })
       })
  }
  register(){
    this.loginShow=false; 
    this.registerShow=true;
    this.adminshow=false;
    this.adminregisterShow=false;
   }
   register1(){
     this.loginShow=false;
     this.adminregisterShow=true;
     this.registerShow=false;
     this.adminshow=false;
   }
   backToLogin(){
     this.loginShow=true; 
    this.registerShow=false;
    this.adminregisterShow=false;
    this.adminshow=false;
   }
   adminlogin(){
     this.loginShow=false;
     this.adminshow=true;
     this.adminregisterShow=false;
     this.registerShow=false;
   }

  addToUser(){
    this.newuser= this.userregisterForm.value;
    console.log(this.newuser)
    this.userService.addToUser(this.newuser)
   .subscribe(res => {
     console.log(res)
     if(res){
      Swal.fire(
        'Registered!',
        'Now you are ready to Login!!',
        'success'
      )
     }
   });
  }

  addToAdmin(){
    this.newadmin=this.adminregisterForm.value; 
    this.userService.addToAdmin(this.newadmin)
    .subscribe(res => {
     console.log(res)
     if(res==null){
      Swal.fire(
        'Registered!',
        'Now you are ready to Login!!',
        'success'
      )
    }
   });
  }

   getUserName(){
    return this.loginForm.get('username');
  }
  getPassword(){
    return this.loginForm.get('password');
  }
  getUName(){
    return this.userregisterForm.get('userName');
  } 
  getpassword(){
    return this.userregisterForm.get('password');
  }
  getAdminname(){
    return this.adminregisterForm.get('userName');
  }
  getAdminPass(){
    return this.adminregisterForm.get('password');
  } 
  getAdminName(){
    return this.adminForm.get('username');
  }
  getadminPassword(){
    return this.adminForm.get('password');
  }


  getUserNameErrorMsg(){
    if(this.getUserName()?.invalid && (this.getUserName()?.dirty || this.getUserName()?.touched)){
      return "User Name should not be blank"
    }else{
      return "";
    }
  }
  getPasswordErrorMsg(){
    if(this.getPassword()?.invalid &&(this.getPassword()?.dirty || this.getPassword()?.touched)){
      if(this.getPassword()?.hasError('required')){
        return "Password can not be blank"
      }
      else if(this.getPassword()?.hasError('minlength')){
        return "Password can not be less the 6 char"
      }
      else{
        return ""
      }
    }else{
      return ""
    }
  }


  getUserNameErrorMsg1(){
    if(this.getUName()?.invalid && (this.getUName()?.dirty || this.getUName()?.touched)){
      return "User Name should not be blank"
    }else{
      return "";
    }
  }
  getPasswordErrorMsg1(){
    if(this.getpassword()?.invalid &&(this.getpassword()?.dirty || this.getpassword()?.touched)){
      if(this.getpassword()?.hasError('required')){
        return "Password can not be blank"
      }
      else if(this.getpassword()?.hasError('minlength')){
        return "Password can not be less the 6 char"
      }
      else{
        return ""
      }
    }else{
      return ""
    }
  } 
  
  
  getUserNameErrorMsg2(){
    if(this.getAdminname()?.invalid && (this.getAdminname()?.dirty || this.getAdminname()?.touched)){
      return "User Name should not be blank"
    }else{
      return "";
    }
  }
  getPasswordErrorMsg2(){
    if(this.getAdminPass()?.invalid &&(this.getAdminPass()?.dirty || this.getAdminPass()?.touched)){
      if(this.getAdminPass()?.hasError('required')){
        return "Password can not be blank"
      }
      else if(this.getAdminPass()?.hasError('minlength')){
        return "Password can not be less the 6 char"
      }
      else{
        return ""
      }
    }else{
      return ""
    }
  }


  getUserNameErrorMsg3(){
    if(this.getAdminName()?.invalid && (this.getAdminName()?.dirty || this.getAdminName()?.touched)){
      return "User Name should not be blank"
    }else{
      return "";
    }
  }
  getPasswordErrorMsg3(){
    if(this.getadminPassword()?.invalid &&(this.getadminPassword()?.dirty || this.getadminPassword()?.touched)){
      if(this.getPassword()?.hasError('required')){
        return "Password can not be blank"
      }
      else if(this.getadminPassword()?.hasError('minlength')){
        return "Password can not be less the 6 char"
      }
      else{
        return ""
      }
    }else{
      return ""
    }
  }
  ngOnInit(): void {
  }

}
