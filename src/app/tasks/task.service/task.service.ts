import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Task } from '../../domain/task';
import 'rxjs/add/operator/toPromise';

//import { Headers, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';


@Injectable()
export class TaskService  {

  constructor(private http: HttpClient) {}
  
  headers = new Headers({'Content-Type': 'application/json'});
/*
  task = {    
    "_id": "",
    "_rev":"", 
    "TaskName": "",
    "ScheduledUrl": "",
    //"Headers": {},
    "Body": "",
    "Cron": "",
    "MaxDuration": 0
    //"ConflictTasks": [""],     
  }
*/
  getTasks(Token: string) {
    console.log ("Function: getTasks()");

    let url =  'https://ldd-scheduler-test.mybluemix.net/api/scheduler/tasks';
    let urlToken = '/'+ Token;

    console.log ("Function: getTasks() 1");

    if (Token != "") { url = url+ urlToken}
    console.log ("url = " + url) ;
    return this.http.get<any>(url)
    .toPromise()
    .then(res => <Task[]> res.models)
    .then(data => data);
    //return this.http.get (url, {headers: this.headers});
  }
/*
  getTaskById(id: string) {    
    console.log ("getTaskById");
    return "";

    
    //return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/'+id, {headers: this.headers});
  }

  getTaskStatusById(id: string) {    
    return console.log ("getTaskStatusById");
    //return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/status/'+id, {headers: this.headers});
  }

  setTaskDisable(id: string) {    
    return console.log ("setTaskDisable");
    //return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/disable/'+id, {headers: this.headers});
  }

  setTaskToScheduler(id: string) {    
    return console.log ("setTaskToScheduler");
    //return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/submit/'+id, {headers: this.headers});
  }

  runTask(id: string) {    
    return console.log ("runTask");
    //return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/run/'+id, {headers: this.headers});
  }

  createTask(task) {    
    console.log ("createTask task = " + task);
    //return this.http.post ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/create', task, {headers: this.headers});
  }
  
  updateTask(task) {  
    return console.log ("updateTask");
    //return this.http.put ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/update/'+task._id + '/'+task._rev, JSON.stringify(task), {headers: this.headers});
  }

  deleteTask(id: string) {    
    return console.log ("deleteTask");
    //return this.http.delete ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/delete/'+id, {headers: this.headers});
  }
  */
}
