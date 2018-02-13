import { Component,  Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  header = 'this is header';
  footer = 'this is footer';

  constructor (private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
  }
}
