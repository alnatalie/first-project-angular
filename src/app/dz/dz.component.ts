import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'todo-items',
  imports: [FormsModule],
  template: `<fieldset> 
      <input type="checkbox">
      <span>{{item}}</span>
      <button >❌</button>
      <button>✏️</button>
  </fieldset>`

})

export class ToDoItem {
  @Input() item = {}

}

@Component({
  selector: 'todo-input',
  imports: [FormsModule,],
  template: `<fieldset>
    <legend>Список дел </legend>
    <input [(ngModel)] ="inp"/><button (click)="out.emit(inp)">➕Добавить</button>
  </fieldset>`


})
export class ToDoInput {
  @Input() inp = 'Дело №'
  @Output() out = new EventEmitter;
  

}



@Component({
  selector: 'app-dz',
  imports: [ToDoInput, FormsModule, ToDoItem],
  templateUrl: './dz.component.html',
  styleUrl: './dz.component.css'
  
  
})
export class DzComponent {
  items = 
    [
      'Дело№1',
       'Дело№2',
      'Дело№3'
    ]
    addItem(item:any){this.items.push(item)};
};
