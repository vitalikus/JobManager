
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {TabViewModule} from 'primeng/tabview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styleUrl: : [''];
  
})
export class AppComponent {
  name = 'Job Manager';

 // constructor (private taskService: TaskService) {}
 constructor (private route: ActivatedRoute, 
    private router: Router) {}
  
 
}
