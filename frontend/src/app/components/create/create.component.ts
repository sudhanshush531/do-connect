import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user.module';
import { UserCrudService } from 'src/app/services/user-crud.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm!: FormGroup;
  user: User = new User();
  users: Array<User> = [];

  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<CreateComponent>,
    private userService:UserService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group(
      {
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required])
      }
    )
  }
  save() {
    this.user= this.createForm .value;
    console.log(this.user)
    this.userService.addToUser(this.user)
    .subscribe(res => {
     console.log(res)
     if(res){
       alert("New User Added Successful!!!");
     }
   });
  }
  getUserName(){
    return this.createForm.get('userName');
  }
  getPassword(){
    return this.createForm.get('password');
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

}
