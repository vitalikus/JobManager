import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HistoryService } from '../history.service/history.service';
import { Subscription } from 'rxjs/Subscription';
import { History } from '../../domain/history';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DataTableModule} from 'primeng/datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as moment from 'moment';

@Component({
  selector: 'app-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css']
})
export class ListHistoriesComponent implements OnInit {

  // historyArray: {pageToken: string, models: {}[]};
  private reqSubscription: Subscription;
  histories: History[];
  pageToken: String;
  // historyArray: any = [];
  cols: any[];
  multiSortMeta;
  durationFilter: number;
  durationTimeout: any;

  constructor(private historyService: HistoryService,
              private route: ActivatedRoute,
              private router: Router) {
              }

  ngOnInit() {
    this.loadHistory ();
    this.multiSortMeta = [];
    this.multiSortMeta.push({field: 'StartDate', order: 1});
    this.multiSortMeta.push({field: 'ResponseStatus', order: 1});
  }

  loadHistory () {
    this.histories = [];
    let index = 0;
    console.log ('loadHistory');
    this.reqSubscription = this.historyService.getHistory('').subscribe(
       (response: Response) => {
          let  historyArray: any = [];
          historyArray = response;
          this.pageToken = historyArray['pageToken'];
          this.histories = historyArray['models'];
          this.histories.forEach(log => {
             const dateLog = moment (log.StartDate).format('YYYY-MM-DD HH:mm:ss ZZ');
             this.histories[index].StartDate = dateLog;
             index ++;
          });
          this.historyService.setHistories (this.histories);
      },
        (error) => {
          console.log('Error on loading history: ' + error);
        }
    );
  }

  /*
  onGetFirstPage () {
    this.historyService.getHistories('').subscribe(
      (response: Response) => {
        this.historyArray = response.json();
      },
    (error) => {
       console.log(error);
    }
    );
  }
*/
/*
  onGetNextPage () {
    this.historyService.getHistory(this.historyArray.pageToken).subscribe(
      (response: Response) => {
        this.historyArray = response.json();
      },
    (error) => {
       console.log(error);
    }
    );
  }
*/
  getTaskname (taskId) {

  }
}

