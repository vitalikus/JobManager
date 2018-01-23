import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-basic',
  templateUrl: './collapse-basic.component.html',
  styleUrls: ['./collapse-basic.component.css']
})
export class CollapseBasicComponent implements OnInit {

  public isCollapsed = false;
  
  constructor() { }

  ngOnInit() {
    
  }

}
