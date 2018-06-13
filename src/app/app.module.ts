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
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { DisplayItemsComponent } from './manage-items/display-items/display-items.component';
import { AddeditItemsComponent } from './manage-items/addedit-items/addedit-items.component';
import { ShopsService } from './services/shops.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateListComponent,
    UseListComponent,
    CurrentComponent,
    RepeatingComponent,
    DoneComponent,
    TodoComponent,
    HeaderComponent,    
    ManageItemsComponent,
    DisplayItemsComponent,
    AddeditItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItemsService, ShopsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
