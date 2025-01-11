import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { CommonModule } from '@angular/common';
import { TodoItem, TodoItemComponent } from './todo-item/todo-item.component';



@Component({
  selector: 'app-dz',
  imports: [FormsModule,TodoInputComponent, CommonModule, TodoItemComponent, ],
  templateUrl: './dz.component.html',
  styleUrl: './dz.component.css'
})

export class DzComponent {
  todoList = [ 
    new TodoItem('дело№1', true),
    new TodoItem('дело№2'),
  ];
  

addTask(text:string){
  this.todoList.push(new TodoItem(text))
}

delById(id:number){
  this.todoList = this.todoList.filter(item=> item.id !==id)
}

toggleCompleted(id:number){
  this.todoList[id].checked = !this.todoList[id].checked
}

}



