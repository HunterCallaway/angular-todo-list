import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import {TodoComponent} from "./todo/todo.component";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AboutComponent,
    NavbarComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
