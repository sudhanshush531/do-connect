import { Component, OnInit } from '@angular/core';
import { Adminquestion } from 'src/app/models/adminquestion/adminquestion.module';
import { DashboardService } from 'src/app/services/dashboard.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
   adminobject:Adminquestion=new Adminquestion();
   datalist:Array<Adminquestion>=[];
  constructor(private dashboardService:DashboardService,private routerService : RouterService) {
    this.dashboardService.viewAdminData().subscribe(res=>{ 
      const res1=res.map(data=>{
      return { 
        id:data.id,
        title: data.title,
        question:data.question,
        answer: data.answer}
    });
  
    this.datalist=[...res1];
    console.log(this.datalist)
   })
  }
  post(newobj:Adminquestion){
    console.log(newobj);
    Swal.fire(
      'Approved!',
      'Question/Answer has been approved',
      'success'
    )
    this.dashboardService.addToUserTable(newobj).subscribe(res => {
      console.log(res)
    });
  }
  
  delete(id: number) {
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
        this.dashboardService.deleteQues(id).subscribe(data => {
          console.log(data);
        })
        Swal.fire(
          'Deleted!',
          'Question has been deleted.',
          'success'
        )
        window.location.reload();
      }
    })
  }

  gotouser(){
    this.routerService.toUser();
  }
  gotocrud(){
    this.routerService.toCrud();
  }
  ngOnInit(): void {
  }

}
