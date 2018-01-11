
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*styles: [`
  h3 { color: blue;
  }
  '] */
})
export class AppComponent {
  name = 'Job Manager';

 // constructor (private taskService: TaskService) {}
 constructor (private route: ActivatedRoute, 
    private router: Router) {}
  
  sendMeHome() {
    this.router.navigate(['']);
  }
}
