
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Job Manager';

 // constructor (private taskService: TaskService) {}
 constructor (private route: ActivatedRoute, 
    private router: Router) {}
  
 
}
