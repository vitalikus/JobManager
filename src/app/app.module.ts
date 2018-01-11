import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { TaskService } from './task.service/task.service';
import { EditTaskComponent } from './edit-task/edit-task-component';
import { HomeComponent } from './home/home.component';
//import { TaskService } from './task.service/task.service';

const appRoutes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'tasks', component: ViewTasksComponent},
 { path: 'tasks/:id', component: EditTaskComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormTaskComponent,
    EditTaskComponent,
    ViewTasksComponent,
    HomeComponent
    //TaskService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
