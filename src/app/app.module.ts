import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateListComponent } from './create-list/create-list.component';
import { UseListComponent } from './use-list/use-list.component';
import { CurrentComponent } from './create-list/current/current.component';
import { RepeatingComponent } from './create-list/repeating/repeating.component';
import { ItemsService } from './Services/items.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateListComponent,
    UseListComponent,
    CurrentComponent,
    RepeatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
