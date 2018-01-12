import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
//import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  //task: { id: string };
  @ViewChild('f') signupForm: NgForm;

  submitted = false;
  
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => console.log(res.id));
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

  ngOnInit() {
  }

  onSubmit () {
    this.submitted = true;
    
    this.signupForm.reset();
  }

}
