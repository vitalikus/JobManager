import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewTasksComponent } from './tasks/view-tasks/view-tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task-component';
import { TaskService } from './tasks/task.service/task.service';
import { HistoryComponent } from './history/history.component';
import { ListHistoriesComponent } from './history/list-histories/list-histories.component';
import { HistoryService } from './history/history.service/history.service';
import { TaskComponent } from './tasks/task/task.component';
import { CollapseBasicComponent } from './collapse-basic/collapse-basic.component';

//import { TaskService } from './task.service/task.service';
// children: [

const appRoutes: Routes = [
 { path: '', component: ViewTasksComponent},
 { path: 'tasks', component: ViewTasksComponent}, 
 { path: 'task/:id', component: EditTaskComponent},
 { path: 'task/:id/edit', component: EditTaskComponent},
 { path: 'addtask', component: AddTaskComponent},
 { path: 'history', component: ListHistoriesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    EditTaskComponent,
    ViewTasksComponent,
    HomeComponent,
    HistoryComponent,
    ListHistoriesComponent,
    TaskComponent,
    CollapseBasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
