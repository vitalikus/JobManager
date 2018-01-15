import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService  {

  constructor(private http: Http) {}
  
  headers = new Headers({'Content-Type': 'application/json'});

  getTasks() {
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/tasks', {headers: this.headers});
  }

  getTaskById(id: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/'+id, {headers: this.headers});
  }

  getTaskStatusById(id: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/status/'+id, {headers: this.headers});
  }

  getTaskDisableById(id: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/disable/'+id, {headers: this.headers});
  }

  getTaskRunById(id: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/run/'+id, {headers: this.headers});
  }

  createTask() {    
    return this.http.post ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/create', {headers: this.headers});
  }
  
  updateTask(id: string, rev: string) {    
    return this.http.put ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/update/'+id + '/'+rev, {headers: this.headers}).subscribe;
  }

  deleteTask(id: string) {    
    return this.http.delete ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/delete/'+id, {headers: this.headers});
  }

}
