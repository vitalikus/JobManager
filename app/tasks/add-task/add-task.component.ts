import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params  } from '@angular/router';

import { TaskService } from '../task.service/task.service';
//import { Task } from '../task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  //task: { id: string };
  //@ViewChild('f') signupForm: NgForm;

  submitted = false;
  //id;
  
  constructor(private tasksService: TaskService,
    
    private route: ActivatedRoute) { 
      this.route.params.subscribe();
      // console.log (this.id);
    }
/*
  task = {    
    "TaskName": "",
    "ScheduledUrl": "",
     //"Headers": {},
    "Body": "",
    "Cron": "",    
    "MaxDuration": 0,
    //"ConflictTasks": [""],     
  }
*/
  ngOnInit() {
  }

  /* private newMethod(): (value: Params) => void {
    return params => this.id = params['id'];
  } */

  onSubmit () {
    this.submitted = true;
 
    console.log ("saved = " + this.submitted);     
    //console.log ("Task name =" + this.task.TaskName);
    //console.log ("Task ScheduledUrl=" + this.task.ScheduledUrl);
    //console.log ("Task Headers=" + this.task.Headers);
    //console.log ("Task cron=" + this.task.Cron);
    //console.log ("Task MaxDuration=" + this.task.MaxDuration);
    //console.log ("Task ConflictTasks=" + this.task.ConflictTasks);
    /*
    this.tasksService.createTask(this.task).subscribe(
      (response: Response) => {
        console.log ("Task successfully added.");
        console.log(response);
        //this.resetTask();
      },
      (error) => console.log(error)
    ); 
    //this.signupForm.reset();
    */
  }
}
