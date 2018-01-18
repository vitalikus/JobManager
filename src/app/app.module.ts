import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ViewTasksComponent } from './tasks/view-tasks/view-tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task-component';
import { TaskService } from './tasks/task.service/task.service';
import { HistoryComponent } from './history/history.component';
import { ListHistoriesComponent } from './history/list-histories/list-histories.component';
import { HistoryService } from './history/history.service/history.service';

//import { TaskService } from './task.service/task.service';
// children: [

const appRoutes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'tasks', component: ViewTasksComponent}, 
 { path: 'tasks/:id', component: EditTaskComponent},
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
    ListHistoriesComponent
    //TaskService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
 // exports: [RouterModule],
  providers: [TaskService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
