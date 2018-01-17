import { Component, ViewChild, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params  } from '@angular/router';

import { TaskService } from '../task.service/task.service';
import { HistoryService } from '../../history/history.service/history.service';
import { Task } from '../task';
//import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task-component.html',
  styleUrls: ['./edit-task-component.css']
})
export class EditTaskComponent implements OnInit {  
  id: string;
  
  //task: Task;
  arrayHistory: {Body: string}[]=[];
  editMode = false;
  //tasksService: any;
  //@ViewChild('f') signupForm: NgForm;

  saved = false;
  
  constructor(private tasksService: TaskService,
              private historyService: HistoryService,
              private route: ActivatedRoute) { 
    this.route.params.subscribe(this.newMethod());
    console.log (this.id);
  }
  //"Cron": "",
  
  task = {
    "_id": "",
    "_rev": "",    
    "TaskName": "",
    "ScheduledUrl": "",
    "Headers": {},
    "Body": "",
    "Cron": "",
    "ActiveStatus": Boolean,
    "MaxDuration": 0,
    "ConflictTasks": [
      ""
    ],     
  }


  private newMethod(): (value: Params) => void {
    return params => this.id = params['id'];
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        //this.taskeditMode = params['id'] != null;
      }
    ); 

    this.tasksService.getTaskById(this.id).subscribe(
      (response: Response) => {
        this.task = response.json();
     },
     (error) => {
       console.log(error)
     }
    );

    this.historyService.getHistoryByTaskId(this.id).subscribe(
      (response: Response) => {
        this.arrayHistory = response.json();
     },
     (error) => {
       console.log(error)
     }
    );
  }

  onSave (taskForm) {
    this.saved = true;   
    console.log ("saved = " + this.saved);     
    console.log ("Task name =" + this.task.TaskName);
    console.log ("Task _id=" + this.task._id);
    console.log ("Task _rev=" + this.task._rev);
    console.log ("Task ScheduledUrl=" + this.task.ScheduledUrl);
    console.log ("Task Headers=" + this.task.Headers);
    console.log ("Task cron=" + this.task.Cron);
    console.log ("Task ActiveStatus=" + this.task.ActiveStatus);

    console.log ("Task MaxDuration=" + this.task.MaxDuration);
    console.log ("Task ConflictTasks=" + this.task.ConflictTasks);
    
    this.tasksService.updateTask(this.task).subscribe(
      (response: Response) => {
        console.log(response);
        //this.resetTask();
      },
      (error) => console.log(error)
    );        
  }
}
