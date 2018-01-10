import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskServiceComponent } from './task-service.component';

describe('TaskServiceComponent', () => {
  let component: TaskServiceComponent;
  let fixture: ComponentFixture<TaskServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
