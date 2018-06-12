import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateListComponent } from './create-list/create-list.component';
import { UseListComponent } from './use-list/use-list.component';
import { CurrentComponent } from './create-list/current/current.component';
import { RepeatingComponent } from './create-list/repeating/repeating.component';
import { ItemsService } from './Services/items.service';
import { DoneComponent } from './use-list/done/done/done.component';
import { TodoComponent } from './use-list/todo/todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateListComponent,
    UseListComponent,
    CurrentComponent,
    RepeatingComponent,
    DoneComponent,
    TodoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
