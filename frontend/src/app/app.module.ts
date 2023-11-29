import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AccordionModule} from "primeng/accordion";
import {ButtonModule} from "primeng/button";
import {FormComponent} from './components/form/form.component';
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
