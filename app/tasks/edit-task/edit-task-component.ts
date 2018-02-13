import 'rxjs/add/operator/switchMap'
import { Component, OnInit } from '@angular/core';
// , Input
import { ActivatedRoute, Params, Router  } from '@angular/router';
import { Location  } from '@angular/common';

import {EditorModule} from 'primeng/editor';
/*
Custom components
*/
import { Task } from '../../domain/task';
import { TaskService } from '../task.service/task.service';
import { HistoryService } from '../../history/history.service/history.service';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task-component.html',
  styleUrls: ['./edit-task-component.css']
})
export class EditTaskComponent implements OnInit {
  loading = false;
  task: Task;

  needRedirect = false;
  accessError = false;

  title: string;
  message: string;
  display = false;

  id;

  constructor(private taskService: TaskService,
    //          private historyService: HistoryService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.initTask ();
    this.loading = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id) {
        console.log ('ngOnInit: ' + id);
        this.loadTask(id);
      }
    });
  }

initTask () {
  this.task = <Task>{};
  this.task.TaskName = '';
  this.task.Cron = '';
  this.task.Body = '';
  this.task.MaxDuration = '';
  this.task.ScheduledUrl = '';
  this.task.Headers = '';
  this.task.ConflictTasks = '';
}

  loadTask(id) {
    console.log ('loadTask:' + id);
    /*
     this.tasksService.updateTask(this.task).subscribe(
      (response: Response) => {
        console.log ("Task successfully saved.");
        console.log(response);
      },
      (error) => console.log(error)
    );
    */
   this.taskService.getTask(id).then(task => this.task = task);
   this.loading = false;

   /*
    this.taskService.getTask(id).then((response: any) => {
     // console.log (response.task);
      if (response) {
        this.task = response;
        this.loading = false;
      } else {
        this.showMessage(false, 'Unable to load task. Please try again later 1');
        this.loading = false;
        this.needRedirect = true;
      }
    }).catch(() => {
      this.showMessage(false, 'Unable to load task. Please try again later 2');
      this.loading = false;
      this.needRedirect = true;
    });
    */
  }

  showMessage(isSuccess, msg) {
    this.title = (isSuccess) ? 'Success' : 'Failure';
    this.message = msg;
    this.display = true;
  }

  close() {
    if (this.needRedirect) {
      const route = this.accessError ? '/' : '/tasks';
      this.router.navigate([route]);
    }
    this.display = false;
  }

  onSave () {
    console.log ( ' Task name = ' + this.task.TaskName);

    /*

    this.tasksService.updateTask(this.task).subscribe(
      (response: Response) => {
        console.log ("Task successfully saved.");
        console.log(response);
      },
      (error) => console.log(error)
    );
    */
  }

  onDelete ()  {
    console.log ("OnDelete-> Task _id=" + this.id);
    /*
    this.tasksService.deleteTask(this.id).subscribe(
      (response: Response) => {
        console.log ("Task successfully deleted.");
        console.log(response);
      },
      (error) => console.log(error)
    );
    */
  }

  onRun ()  {
    console.log ("OnRun-> Task _id=" + this.id);
    /*
    this.tasksService.runTask(this.id).subscribe(
      (response: Response) => {
        console.log ("Task successfully had run.");
        console.log(response);        
      },
      (error) => console.log(error)
    );  
    */
  }

  onDisabled ()  {
    console.log ("OnDisabled-> Task _id=" + this.id);
    /*
    this.tasksService.setTaskDisable(this.id).subscribe(
      (response: Response) => {
        console.log ("Task successfully had set to disabled.");
        console.log(response);        
      },
      (error) => console.log(error)
    );  */
  }

  onSubmitToScheduler () {
    console.log ("onSubmitToScheduler-> Task _id=" + this.id);
    /*
    this.tasksService.setTaskToScheduler(this.id).subscribe(
      (response: Response) => {
        console.log ("Task successfully had submitted to the scheduler.");
        console.log(response);        
      },
      (error) => console.log(error)
    );  
    */
  }

  onCancel () {
    this.router.navigate(['tasks']);//, {relativeTo: this.route});
  }
}

/*  
    //this.route.params.switchMap((params: Params) => this.taskService.getTask(+params['id']))
    //.subscribe(task => this.task = task);

    this.taskForm = new FormGroup ({
      TaskName: new FormControl ('', [
        Validators.minLength(5),
        Validators.required
      ])
     
    });

  
  
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
    */


  /*
  task = {
    "_id": "",
    "_rev": "",    
    "TaskName": "",
    "ScheduledUrl": "",
    //"Headers": {},
    "Body": "",
    "Cron": "",
    "ActiveStatus": Boolean,
    "MaxDuration": 0
    //"ConflictTasks": [""],     
    */
  

/*
  private newMethod(): (value: Params) => void {
    return params => this.id = params['id'];
  }

  console.log ("Task _id=" + this.task._id);
    console.log ("Task _rev=" + this.task._rev);
    //console.log ("Task ScheduledUrl=" + this.task.ScheduledUrl);
    //console.log ("Task Headers=" + this.task.Headers);
    console.log ("Task cron=" + this.task.Cron);
    //console.log ("Task ActiveStatus=" + this.task.ActiveStatus);
    //console.log ("Task MaxDuration=" + this.task.MaxDuration);
    //console.log ("Task ConflictTasks=" + this.task.ConflictTasks);
*/