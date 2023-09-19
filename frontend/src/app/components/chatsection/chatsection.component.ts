import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-chatsection',
  templateUrl: './chatsection.component.html',
  styleUrls: ['./chatsection.component.css']
})
export class ChatsectionComponent implements OnInit {

  items:Array<string>=[];
  newItem="";
  constructor(private dashboardService: DashboardService) { }
pushItem(){
  this.dashboardService.chat(this.newItem).subscribe(data =>{
    console.log(data);

    this.items[this.items.length]=data;
    console.log(this.items)
  });
}

  
  // pushItem=() =>{
  //   if(this.newItem != ""){
  //     this.items.push(this.newItem);
  //     this.newItem="";
  //   }
  // }

  // removeItem=(index: any): void =>{
  //   this.items.splice(index,1);
  // }
  

  ngOnInit(): void {
  }

}
