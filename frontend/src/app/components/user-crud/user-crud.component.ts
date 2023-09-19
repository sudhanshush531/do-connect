import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.module';
import { UserCrudService } from 'src/app/services/user-crud.service';
//dialog
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
//component
import { CreateComponent } from '../create/create.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  user: Array<User> = [];
  
  constructor(private userCrudservice: UserCrudService, private dialog: MatDialog ,private router:Router) {

    this.userCrudservice.getAllUser()
    .subscribe(data => {
      console.log(data)
      this.user = [...data]})
    }
  
  ngOnInit(): void {
  }

  deleteuser(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userCrudservice.deleteUserById(id).subscribe(data => {
          console.log(data);
        })
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        )
        window.location.reload();
      }
    })
  }

  onCreate() {
    
    this.dialog.open(CreateComponent,{
    width:"30%"
  })
  }

  onEdit(user:User){
    this.dialog.open(UpdateUserComponent,{
      width:"30%",
         data:user
         })
  }
}