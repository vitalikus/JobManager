import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService  {

  constructor(private http: Http) {}
  
  getTasks() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/tasks', {headers: headers});
  }
  getTaskById(id: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/'+id, {headers: headers});
  }
}
