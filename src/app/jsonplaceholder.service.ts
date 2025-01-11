import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface hasIdAndName{
  id: number;
  name: string;
  email: string;

}
export type Post ={
  userId: number,
  id: number,
  title: string,
  body: string
  
}


@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) { }
  getAllUsers(){
    return this.http.get<hasIdAndName[]>('https://jsonplaceholder.typicode.com/users')

  }
  
  getPostsByUserId(id:number){
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  }


}
