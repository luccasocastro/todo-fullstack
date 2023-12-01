import { Component } from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {MessageService} from "primeng/api";
import {TodoRequest} from "../../Todo";
import {ToastService} from "../../services/toast.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [MessageService]
})
export class FormComponent {

  todo: TodoRequest = {
    title: '',
    content: ''
  }

  constructor(private todoService: TodoService, private messageService: MessageService, private toastService: ToastService, private ref: DynamicDialogRef) {
  }

  sendData(){
    console.log(this.todo)
    if (this.todo.title && this.todo.content) {
      this.todoService.insertTodo(this.todo).subscribe((data) => {
        console.log(data);
        this.ref.close()
        this.toastService.triggerToastSuccess()
        this.toastService.triggerLoadData()
      });
    } else {
      this.toastService.triggerToastError()
    }
  }

}
