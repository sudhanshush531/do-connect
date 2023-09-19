import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { User } from 'src/app/models/user/user.module';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { UserCrudService } from 'src/app/services/user-crud.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  users: Array<User> = [];
  updatesForm!: FormGroup;

  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<UpdateUserComponent>,
    public userCrudservice: UserCrudService) { }

  ngOnInit(): void {
    this.updatesForm = this.formBuilder.group(
      {
        userName: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)]),
        phone:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required])
        }  )}

  update() {
    this.user.id = this.updatesForm.value.id;
    this.user.userName = this.updatesForm.value.userName;
    this.user.password = this.updatesForm.value.password;
    this.user.email = this.updatesForm.value.email;
    this.user.phone = this.updatesForm.value.phone;
    console.log(this.user);
    this.userCrudservice.updateUserDetails(this.user).subscribe(data => {
      console.log(data);

    })
  }

   getUserName(){
    return this.updatesForm.get('userName');
  }
  getPassword(){
    return this.updatesForm.get('password');
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
