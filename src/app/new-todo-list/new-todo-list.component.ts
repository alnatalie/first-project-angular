import { Component } from '@angular/core';



@Component({
  selector: 'app-new-todo-list',
  imports: [],
  templateUrl: './new-todo-list.component.html',
  styleUrl: './new-todo-list.component.css'
})
export class NewTodoListComponent {
  todoValue: String ='';
  todoList = [
    {title: "Дело №1",
      checked: false
    },
    {title: "Дело №2",
      checked: false
    },
    {title: "Дело №3",
      checked: false
    },
  ];
  

}
