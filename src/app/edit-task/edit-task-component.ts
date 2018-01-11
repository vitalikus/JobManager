import { Component, ViewChild, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from '../task.service/task.service';
//import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task-component.html',
  styleUrls: ['./edit-task-component.css']
})
export class EditTaskComponent implements OnInit {  
  //tasksService: any;
  //@ViewChild('f') signupForm: NgForm;

  submitted = false;
  
  constructor(private tasksService: TaskService,
              private route: ActivatedRoute) { 
    this.route.params.subscribe(res => console.log(res.id));
  }
  id="";
  task = {
    "Body": "",
    "ConflictTasks": [
      ""
    ],
    "Cron": "",
    "Headers": {},
    "MaxDuration": 0,
    "ScheduledUrl": "",
    "TaskName": "",
    "_id": "",
    "_rev": ""
  }

  ngOnInit() {
    this.tasksService.getTaskById(this.id).subscribe(
      (response: Response) => {
        this.task = response.json();
     },
     (error) => {
       console.log(error)
     }
    );
  }

  onSubmit () {
    this.submitted = true;    
  }

}
