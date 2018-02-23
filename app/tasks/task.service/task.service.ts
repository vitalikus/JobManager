import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Task } from '../../domain/task';
import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};

@Injectable()
export class TaskService  {
  tasks: Task[];
  taskURL = 'https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/';
  tasksURL = 'https://ldd-scheduler-test.mybluemix.net/api/scheduler/tasks/';


  constructor(private http: HttpClient) {}
  
  getAllTasks () {
    return this.tasks;
  }

  setTasks (tasks_) {
    this.tasks = tasks_;
  }

  getTasks(Token: string) {
    let apiURL = this.tasksURL;
    if (Token !== '') { apiURL = apiURL + Token; }

  return (this.http.get(apiURL));

/*
    return this.http.get<any>(apiURL)
      .toPromise()
      .then(res => <Task[]> res.models)
      .then(data => data);
*/
  }

  getTask(id: string) {
      const apiURL = this.taskURL + id;

      return this.http.get<any>(apiURL)
      .toPromise()
      .then(res => <Task> res)
      .then (data => data);
  }

  updateTask(task) {
    const body = JSON.stringify(task);
    const apiURL = this.taskURL + 'update/' + task._id + '/' + task._rev;
    console.log ('updateTask:' + apiURL);

    return this.http.put (apiURL, body, httpOptions);
  }
/*
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
  
  u

  deleteTask(id: string) {    
    return console.log ("deleteTask");
    //return this.http.delete ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/task/delete/'+id, {headers: this.headers});
  }
  */
}
