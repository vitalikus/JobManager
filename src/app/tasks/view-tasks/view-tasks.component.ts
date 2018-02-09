import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';
import { DataTableModule} from 'primeng/datatable';
//import { DomHandler, Tooltip} from "primeng/primeng";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

    multiSortMeta;// = [];

    durationFilter: number;

    durationTimeout: any;

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
  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
            //  private location: Location,
              private router: Router ) {
              //this.route.params.subscribe(res => console.log(res.id));
  }
  /*,
              private historyService: HistoryService,
              
*/
  ngOnInit() {
    
    this.taskService.getTasks("").then(tasks => this.tasks = tasks);

    //this.route.params.switchMap((params: Params) => this.bikeService.getBike(+params['id']))
      //.subscribe(bike => this.bike = bike);
    
    this.cols = [
            { field: '_id', header: 'ID', width: '25%' },
            { field: 'TaskName', header: 'Task Name', width: '30%' },
            { field: 'Cron', header: 'Cron', width: '10%' },
            { field: 'MaxDuration', header: 'Timeout', width: '10%' },            
            { field: 'ScheduledUrl', header: 'Scheduled Url', width: '25%' }
                    
    ];
    this.multiSortMeta = [];
    this.multiSortMeta.push({field: 'TaskName', order: 1});        
    this.multiSortMeta.push({field: 'Cron', order: 1});        
  //  this.onGetFirstPage ();

  }
 
  showDialogToAdd() {
    this.newTask = true;
    this.task = new PrimeTask();
    this.displayDialog = true;
  }

  editTask(task: Task): void {
    this.selectedTask = task;
    this.router.navigate(['/task', this.selectedTask._id]);
  }

  removeTask(task: Task): void {
    this.selectedTask = task;
    this.router.navigate(['/task', this.selectedTask._id]);
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

onDurationChange(event, dt) {
  if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
  }

  this.durationTimeout = setTimeout(() => {
      dt.filter(event.value, 'MaxDuration', 'gt');
  }, 250);
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
