import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HistoryService  {

  constructor(private http: Http) {}
  
  headers = new Headers({'Content-Type': 'application/json'});

  getHistories(Token: string) {
    let url =  'https://ldd-scheduler-test.mybluemix.net/api/scheduler/histories';
    let urlToken = '/'+ Token;

    if (Token != "") { url = url+ urlToken}

    return this.http.get (url, {headers: this.headers});    
  }

  getHistoryByTaskId(TaskId: string) {    
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/history/task/'+TaskId, {headers: this.headers});
  }
}