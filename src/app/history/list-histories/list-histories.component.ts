import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HistoryService } from '../history.service/history.service';


@Component({
  selector: 'app-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css']
})
export class ListHistoriesComponent implements OnInit {

  historyArray: {pageToken: string, models: {}[]};//{Body: string}[]=[];
  constructor(private historyService: HistoryService,
              private route: ActivatedRoute,
              private router: Router) { 
                this.route.params.subscribe(res => console.log(res.id));
              }

  ngOnInit() {
    this.onGetFirstPage ();
  }

  onGetFirstPage () {
    this.historyService.getHistories("").subscribe(
      (response: Response) => {
        this.historyArray = response.json();
      },
    (error) => {
       console.log(error)
    }
    );
  }

  onGetNextPage () {
    this.historyService.getHistories(this.historyArray.pageToken).subscribe(
      (response: Response) => {
        this.historyArray = response.json();
      },
    (error) => {
       console.log(error)
    }
    );
  }

  getTaskname (taskId) {
    
  }
}