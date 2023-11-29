import {Component, OnInit} from '@angular/core';
import {Todo} from "./Todo";
import {TodoService} from "./services/todo.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {FormComponent} from "./components/form/form.component";
import {MessageService} from "primeng/api";
import {ToastService} from "./services/toast.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService, MessageService]
})
export class AppComponent implements OnInit {
  todos!: Todo[];
  ref: DynamicDialogRef | undefined

  constructor(private todoService: TodoService, private dialogService: DialogService, private messageService: MessageService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.loadData()
    this.toastService.loadData$.subscribe(() => this.loadData())
    this.toastService.toastSuccess$.subscribe(() => this.showInsertSucces())
    this.toastService.toastWarn$.subscribe(() => this.showWarnDataForm())
    this.toastService.toastError$.subscribe(() => this.showError())
  }

  loadData() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data
    })
  }

  realizeTodo(event: any, id: string) {
    if (event.checked) {
      this.todoService.realizeTodo(id).subscribe(() => {
        console.log("Atualizado!")
      })
    }
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Deleted Todo' });
      this.loadData()
    })
  }

  show() {
    this.ref = this.dialogService.open(FormComponent, {
      header: 'New Todo',
      width: '50rem',
      height: '30em',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      maximizable: false
    })
  }

  showInsertSucces() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showWarnDataForm() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

}
