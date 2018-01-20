import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService  {

  constructor(private http: Http) {}
  
  headers = new Headers({'Content-Type': 'application/json'});

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

  getTasks() {
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/tasks', {headers: this.headers});
  }

  getTaskById(id: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/'+id, {headers: this.headers});
  }

  getTaskStatusById(id: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/status/'+id, {headers: this.headers});
  }

  setTaskDisable(id: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/disable/'+id, {headers: this.headers});
  }

  setTaskToScheduler(id: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/submit/'+id, {headers: this.headers});
  }

  runTask(id: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/run/'+id, {headers: this.headers});
  }

  createTask(task) {    
    console.log ("task = " + task);
    return this.http.post ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/create', task, {headers: this.headers});
  }
  
  updateTask(task) {  
    return this.http.put ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/update/'+task._id + '/'+task._rev, JSON.stringify(task), {headers: this.headers});
  }

  deleteTask(id: string) {    
    return this.http.delete ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/delete/'+id, {headers: this.headers});
  }
}
