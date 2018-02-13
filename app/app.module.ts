import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Input, Output, Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoadingModule } from 'ngx-loading';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {EditorModule} from 'primeng/editor';


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
import { DataTableModule } from 'primeng/datatable';
import { LayoutComponent } from './layout/layout.component';

const appRoutes: Routes = [
 { path: '', component: ViewTasksComponent},
 { path: 'tasks', component: ViewTasksComponent},
 { path: 'task/:id', component: EditTaskComponent},
 { path: 'addtask', component: AddTaskComponent},
 { path: 'history', component: ListHistoriesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent,
    EditTaskComponent,
    ViewTasksComponent,
    HistoryComponent,
    ListHistoriesComponent,
    TaskComponent,
    CollapseBasicComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    TabViewModule,
    DataTableModule,
    EditorModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService, HistoryService],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
