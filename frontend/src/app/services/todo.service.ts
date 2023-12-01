import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo, TodoRequest} from "../Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseApiUrl: string = 'http://localhost:8080/api/todos'

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl)
  }

  realizeTodo(id: string): Observable<any> {
    return this.http.patch<any>(`${this.baseApiUrl}/realizeTodo/${id}`, null)
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.baseApiUrl}/${id}`)
  }

  deleteAllTodos(): Observable<any> {
    return this.http.delete(this.baseApiUrl)
  }

  insertTodo(todo: TodoRequest): Observable<any>{
    return this.http.post(this.baseApiUrl, todo)
  }
}
