import { Component, ViewChild, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params  } from '@angular/router';

import { TaskService } from '../task.service/task.service';
//import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task-component.html',
  styleUrls: ['./edit-task-component.css']
})
export class EditTaskComponent implements OnInit {  
  id: string;
  editMode = false;
  //tasksService: any;
  //@ViewChild('f') signupForm: NgForm;

  saved = false;
  
  constructor(private tasksService: TaskService,
              private route: ActivatedRoute) { 
    this.route.params.subscribe(this.newMethod());
    console.log (this.id);
  }
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

  private newMethod(): (value: Params) => void {
    return params => this.id = params['id'];
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        //this.rev = params['_rev'];
        this.editMode = params['id'] != null;
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
  }

  onSave () {
    this.saved = true;    
  }
}
