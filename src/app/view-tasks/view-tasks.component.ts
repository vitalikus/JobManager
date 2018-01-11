import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { TaskService } from '../task.service/task.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  
  tasksArray: {Body: string}[]=[];
  constructor(private tasksService: TaskService,
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
  //constructor (private taskService: TaskService) {}
  /*
  tasks = 
  {
  "models": [
    {
      "Body": "string",
      "ConflictTasks": [
        "string"
      ],
      "Cron": "0 * * * * ?",
      "Headers": {},
      "MaxDuration": 15,
      "ScheduledUrl": "string",
      "TaskName": "string",
      "_id": "string",
      "_rev": "string"
    }
  ],
  "pageToken": "string"
};
*/
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

sendMeHome() {
  this.router.navigate(['']);
}
/*
  ngOnInit() {    
    this.taskService.getTasks()
    .subscribe((res => this.tasks = res));
  }
  */
}
