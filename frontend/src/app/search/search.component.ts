import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Userquestion } from '../models/userquestion/userquestion.module';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userQ: Userquestion = new Userquestion();
  userQA: Array<Userquestion> = [];
  constructor(private route: ActivatedRoute, private dashboard: DashboardService) { }

  ngOnInit(): void {
    this.userQ.id = this.route.snapshot.params['id'];
    console.log(this.userQ.id);
    this.dashboard.findAllUserQAById(this.userQ.id).subscribe(data => {
      console.log(data);
      this.userQA.push(data);
      console.log(this.userQA);

    })

  }

}
