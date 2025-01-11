import { Component, EventEmitter, Output,} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css'
})
export class TodoInputComponent {
  @Output() newItem = new EventEmitter<string>();
  value = '';
  @Output() delById = new EventEmitter<number>();

}
