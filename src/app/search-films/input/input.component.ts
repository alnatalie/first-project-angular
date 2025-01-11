import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule,],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Output() nameMovie = new EventEmitter<string>();
  value:string = 'batman';
  onSearch(event:KeyboardEvent){
    if(event.key === "Enter"){
      this.nameMovie.emit(this.value)
    }
  }

}
