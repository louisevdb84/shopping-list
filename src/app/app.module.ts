import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

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
import { StatusService } from './services/status.service';
import { ManageShopsComponent } from './manage-shops/manage-shops/manage-shops.component';
import { AddeditShopsComponent } from './manage-shops/addedit-shops/addedit-shops.component';
import { DisplayShopsComponent } from './manage-shops/display-shops/display-shops.component';


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
    AddeditItemsComponent,
    ManageShopsComponent,
    AddeditShopsComponent,
    DisplayShopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemsService, ShopsService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
