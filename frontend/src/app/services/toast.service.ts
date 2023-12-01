import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private loadData = new Subject<void>()
  private toastSuccess = new Subject<void>()
  private toastWarn = new Subject<void>()
  private toastError = new Subject<void>()

  loadData$ = this.loadData.asObservable()
  toastSuccess$ = this.toastSuccess.asObservable()
  toastWarn$ = this.toastWarn.asObservable()
  toastError$ = this.toastError.asObservable()

  triggerLoadData(){
    this.loadData.next()
  }

  triggerToastSuccess(){
    this.toastSuccess.next()
  }

  triggerToastWarn(){
    this.toastWarn.next()
  }

  triggerToastError(){
    this.toastError.next()
  }

  constructor() { }
}
