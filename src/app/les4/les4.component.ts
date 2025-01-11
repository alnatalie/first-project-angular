import { Component } from '@angular/core';
import {
  JsonplaceholderService,
  hasIdAndName,
  Post,
} from '../jsonplaceholder.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-les4',
  imports: [AsyncPipe],
  templateUrl: './les4.component.html',
  styleUrl: './les4.component.css',
})
export class Les4Component {
  users!: Observable<hasIdAndName[]>;
  posts: Post[] = [];
  constructor(private jsph: JsonplaceholderService) {}
  getPosts(id: number) {
    this.jsph.getPostsByUserId(id).subscribe((data) => (this.posts = data));
  }
  ngOnInit() {
    this.users = this.jsph.getAllUsers();
  }
}
