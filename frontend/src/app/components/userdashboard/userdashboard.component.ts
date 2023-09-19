import { Component, OnInit ,ElementRef, ViewChild, AfterViewChecked} from '@angular/core';
import { FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { Userquestion } from 'src/app/models/userquestion/userquestion.module';
import { DashboardService } from 'src/app/services/dashboard.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
 
  userobject: Userquestion = new Userquestion();
  datas: Array<Userquestion> = [];
  datalist: Array<Userquestion> = [];
  question: any;
  allchats: Chat[]=[];
  chatform:FormGroup
  c:Chat;
  message:String;
  // chat=new FormGroup(
  //   // chat: new FormGroup(''),
  // )
  datasForm = new FormGroup(
    {
      topic: new FormControl(''),
      question: new FormControl(''),
      answer: new FormControl('')
    }
  )

  ansForm = new FormGroup(
    {
      answer: new FormControl('')
    }
  )
  constructor(private dashboardService: DashboardService, private router: Router, private userchat: UserService) {
    this.c=new Chat();
    this.dashboardService.viewUserData().subscribe(res => {
      
      const res1 = res.map(data => {
        return {
          id: data.id,
          title: data.title,
          question: data.question,
          answer: data.answer
        }
      });
      this.datalist = [...res1];
      console.log(this.datalist)
    })
  }

  ngOnInit(): void {
   
    this.chatform = new FormGroup({
      m: new FormControl(null,Validators.required),
    })
    this.loadMessages();

    this.dashboardService.getAllQA().subscribe(data => {
      const data1 = data.map(res => {
        return {
          id: res.id,
          title: res.title,
          question: res.question,
          answer: res.answer
        }
      });
      this.datas = [...data1];
      console.log(this.datas);

    })
  }

  loadMessages()
  {
    this.userchat.getchats().subscribe(
      (chats)=>this.allchats=chats,
     
      (error)=>
      console.log(error)
    )
  }
  onSend()
  {
   
   
    this.c.email= this.userchat.username;
    this.message=this.chatform.controls['m'].value
    this.c.message=this.message
    console.log(this.chatform.controls['m'].value)
    console.log("ssssssssssssssssss")
    this.userchat.putchat(this.c).subscribe(
      res=>{ this.loadMessages();
        this.chatform.controls['m'].setValue("")
      },
      err=>console.log(err)
    )
   
  }
  post(dataForm: NgForm) {
    this.dashboardService.emailReq().subscribe(res => {
      Swal.fire(
        'Question posted successfully!!!',
        'Email Notification has been sent',
        'success'
      )
      console.log(res)
    });
    console.log(dataForm.value);
    this.userobject.title = dataForm.value.title;
    this.userobject.question = dataForm.value.question;
    //  this.userobject.answer=dataForm.value.answer;
    this.dashboardService.addToAdminTable(this.userobject).subscribe(res => {
      console.log(res)
    });
  }

  addAns(d: Userquestion) {
    console.log(d);

    this.dashboardService.emailAns().subscribe(res => {

      Swal.fire(
        'Answer posted successfully!!!',
        'Email Notification has been sent',
        'success'
      )
      console.log(res)
    });
    d.answer = this.ansForm.value.answer;
    this.dashboardService.addToAdminTable(d).subscribe(res => {
      console.log(res)
    });
  }

  search() {
    if (this.question == "") {
      this.ngOnInit();
    }
    else {
      this.datas = this.datas.filter(res => {
        return res.question?.toLocaleLowerCase().match(this.question?.toLocaleLowerCase());
      })
    }
  }

  searchQ() {
    const num1 = this.datas.filter(res => {
      res.question?.toLocaleLowerCase().match(this.question?.toLocaleLowerCase());
      console.log(res.id);
      this.router.navigate(['search', res.id])
    })
  }

}
