import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HistoryService  {

  constructor(private http: Http) {}
  
  headers = new Headers({'Content-Type': 'application/json'});

  getHistories() {
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net//api/scheduler/histories', {headers: this.headers});
  }

  getHistoryByTaskId(TaskId: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/histories/'+TaskId, {headers: this.headers});
  }
}