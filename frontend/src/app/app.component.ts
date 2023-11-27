import {Component, OnInit} from '@angular/core';
import {Todo} from "./Todo";
import {TodoService} from "./services/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todos!: Todo[];

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data
    })
  }

  realizeTodo(event: any, id: string){
    if(event.checked) {
      this.todoService.realizeTodo(id).subscribe(() => {
        console.log("Atualizado!")
      })
    }
  }

  deleteTodo(id: string){
    this.todoService.deleteTodo(id).subscribe(() => {
      console.log("Deletado!")
      this.loadData()
    })
  }
}
