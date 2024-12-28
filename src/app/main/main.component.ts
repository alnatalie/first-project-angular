import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  val ='_default_';
  h =20;
  increaseH() { this.h +=5}
  condition = true;
  toggleCondition() {this.condition = !this.condition};
  items = ['Tom', 'Bob', 'Sam', 'Bill']

}
