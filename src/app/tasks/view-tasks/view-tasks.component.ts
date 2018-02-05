import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TableModule }  from 'primeng/table';

import { TaskService } from '../task.service/task.service';
import { HistoryService } from '../../history/history.service/history.service';
//import { HistoryService } from '../history/history.service/history.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  
  tasksArray: {pageToken: string, models: {}[]};// {Body: string}[]=[];
  arrayHistory: {pageToken: string, models: [{"taskId": "",
  "taskName": "",
  "_id": "",
  "_rev": "",
  "ResponseStatus": "",
  "StartDate": "",
  "Duration": 0,
  "ResponseBody": ""}]}; // {Body: string}[]=[];
  
  // {pageToken: string, models: {}[]};
  constructor(private tasksService: TaskService,
              private historyService: HistoryService,
              private route: ActivatedRoute,
              private router: Router) { 
                this.route.params.subscribe(res => console.log(res.id));
              }

  ngOnInit() {
    this.onGetFirstPage ();
  }
 
  onGet() {
    this.onGetFirstPage ();
  }

  onGetFirstPage () {
    this.tasksService.getTasks("").subscribe(
      (response: Response) => {
        this.tasksArray = response.json();
      },
    (error) => {
       console.log(error)
    }
    );
  }

  onGetNextPage() {
    this.tasksService.getTasks(this.tasksArray.pageToken).subscribe(
      (response: Response) => {
        this.tasksArray = response.json();
        },
      (error) => {
        console.log(error)
      }
    );
  }

  onCreateTask () {
      this.router.navigate(['addtask']);
  }
  sendMeHome() {
    this.router.navigate(['']);
  }

 

  public getLastRun(TaskId: string) {
   return TaskId;
   /*
   let lastHistory: {
    "taskId": "",
      "taskName": "",
      "_id": "",
      "_rev": "",
      "ResponseStatus": "",
      "StartDate": "",
      "Duration": 0,
      "ResponseBody": ""
  }
    
    this.historyService.getHistoryByTaskId (TaskId).subscribe(
     (response: Response) => {
       this.arrayHistory = response.json();       
    },
    (error) => {
      console.log(error)
    }
   );
   lastHistory = this.arrayHistory.models[0];
   return lastHistory.StartDate;   
   */
  
 } 
 
}
