import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface ToDoItem{
  id:number;
  title: string;
  checked: boolean;
}

@Component({
  selector: 'app-new-todo-list',
  imports: [FormsModule, NgFor, NgClass],
  templateUrl: './new-todo-list.component.html',
  styleUrl: './new-todo-list.component.css'
})
export class NewTodoListComponent {
  todoValue: String ='';
  todoList: ToDoItem[] = [];
  newTask:string='';


  addTask():void{
    if(this.newTask.trim() !== ''){

      const newTodoItem : ToDoItem = {
        id : Date.now(),
        title: this.newTask,
        checked:false
      }

      this.todoList.push(newTodoItem)
      this.newTask =''
    }

  }

  
  
  toggleCompleted(index: number):void {
    // console.log(index);
    this.todoList[index].checked =!this.todoList[index].checked
    // console.log(this.todoList)
  }
 
  deleteTask(id:number):void{
    this.todoList = this.todoList.filter(item => item.id !== id)
    console.log(this.todoList)

  }
}
