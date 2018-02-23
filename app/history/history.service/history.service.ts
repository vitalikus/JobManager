import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { History } from '../../domain/history';

@Injectable()
export class HistoryService  {

  histories: History[];
  constructor(private http: HttpClient) {}

  headers = new Headers({'Content-Type': 'application/json'});

  getHistory(Token: string) {
    console.log ('getHistory()');
    let url =  'https://ldd-scheduler-test.mybluemix.net/api/scheduler/histories';
    const urlToken = '/' + Token;

    if (Token !== '') { url = url + urlToken; }
console.log (url);
    return this.http.get (url);
  }

  getHistoryByTaskId(TaskId: string) {
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/history/task/' + TaskId);
  }

  setHistories (histories) {
    this.histories = histories;
  }
}
