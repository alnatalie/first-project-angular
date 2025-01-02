import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoListComponent } from './new-todo-list.component';

describe('NewTodoListComponent', () => {
  let component: NewTodoListComponent;
  let fixture: ComponentFixture<NewTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
