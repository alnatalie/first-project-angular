import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class TodoItem {
  public id = Math.random();
  constructor(public text:string, public checked = false){}
}

@Component({
  selector: 'app-todo-item',
  imports: [FormsModule,],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() item = new TodoItem('');
  @Output() delById =new EventEmitter<number>();

  
}
