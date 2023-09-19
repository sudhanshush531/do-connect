import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Userquestion } from 'src/app/models/userquestion/userquestion.module';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userobject: Userquestion = new Userquestion();
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {


  }


}