import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, Http } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';

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
import { AuthService } from './services/auth.service';
import { ManageShopsComponent } from './manage-shops/manage-shops/manage-shops.component';
import { AddeditShopsComponent } from './manage-shops/addedit-shops/addedit-shops.component';
import { DisplayShopsComponent } from './manage-shops/display-shops/display-shops.component';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './services/auth-guard.service';
import { ModalComponent } from './shared/modal/modal.component';


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
    DisplayShopsComponent,
    RegisterComponent,
    SigninComponent,
    ModalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  }, ItemsService, ShopsService, StatusService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
