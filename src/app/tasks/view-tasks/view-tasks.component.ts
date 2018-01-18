import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TaskService } from '../task.service/task.service';
import { HistoryService } from '../../history/history.service/history.service';
//import { HistoryService } from '../history/history.service/history.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  
  tasksArray: {Body: string}[]=[];
  lastHistory: {Body: string}[]=[];
  constructor(private tasksService: TaskService,
              private historyService: HistoryService,
              private route: ActivatedRoute,
              private router: Router) { 
                this.route.params.subscribe(res => console.log(res.id));
              }

  ngOnInit() {
     this.tasksService.getTasks().subscribe(
      (response: Response) => {
        this.tasksArray = response.json();
     },
     (error) => {
       console.log(error)
     }
    );
  }
 
  onGet() {
    this.tasksService.getTasks().subscribe(
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
   //return TaskId;
    /*
    this.historyService.getHistoryByTaskId (TaskId).subscribe(
     (response: Response) => {
       this.lastHistory = response.json();
       
    },
    (error) => {
      console.log(error)
    }
   );
   return this.lastHistory.models.StartDate;
   */
 }
 
}
