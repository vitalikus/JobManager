import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';


import { TaskService } from '../task.service/task.service';
import { HistoryService } from '../../history/history.service/history.service';

import { Task } from '../../domain/task';

//import { HistoryService } from '../history/history.service/history.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
    displayDialog: boolean;
    
    task: Task = new PrimeTask();
    
    selectedTask: Task;
    
    newTask: boolean;
    
    tasks: Task[];

    cols: any[];
  /*
  tasksArray: {pageToken: string, models: {}[]};
  
  arrayHistory: {pageToken: string, models: [{"taskId": "",
  "taskName": "",
  "_id": "",
  "_rev": "",
  "ResponseStatus": "",
  "StartDate": "",
  "Duration": 0,
  "ResponseBody": ""}]}; // {Body: string}[]=[];
  */
  // {pageToken: string, models: {}[]};
  constructor(private taskService: TaskService) {}
  /*,
              private historyService: HistoryService,
              private route: ActivatedRoute,
              private router: Router) { 
                this.route.params.subscribe(res => console.log(res.id));
              }
*/
  ngOnInit() {
    console.log ("1");
    this.taskService.getTasks("").then(tasks => this.tasks = tasks);
    console.log ("2");
        this.cols = [
            { field: 'TaskName', header: 'TaskName' },
            { field: 'Cron', header: 'Cron' }            
        ];
  //  this.onGetFirstPage ();

  }
 
  showDialogToAdd() {
    this.newTask = true;
    this.task = new PrimeTask();
    this.displayDialog = true;
}

save() {
    const tasks = [...this.tasks];
    if (this.newTask) {
        tasks.push(this.task);
    } else {
        tasks[this.findSelectedTaskIndex()] = this.task;
    }
    this.tasks = tasks;
    this.task = null;
    this.displayDialog = false;
}

delete() {
    const index = this.findSelectedTaskIndex();
    this.tasks = this.tasks.filter((val, i) => i != index);
    this.task = null;
    this.displayDialog = false;
}

onRowSelect(event) {
    this.newTask = false;
    this.task = this.cloneTask(event.data);
    this.displayDialog = true;
}

cloneTask(c: Task): Task {
    const task = new PrimeTask();
    for (const prop in c) {
        task[prop] = c[prop];
    }
    return task;
}

findSelectedTaskIndex(): number {
    return this.tasks.indexOf(this.selectedTask);
}



  onGet() {
  //  this.onGetFirstPage ();
  }
/*
  onGetFirstPage () {
    this.tasksService.getTasks("")
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

 
*/
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
export class PrimeTask implements Task {
    
  constructor( public _id?, 
    public _rev?, 
    public TaskName?, 
    public Body?, 
    public ConflictTasks?, 
    public Cron?, 
    public Headers?, 
    public MaxDuration?, 
    public ScheduledUrl?
   ) {}
}