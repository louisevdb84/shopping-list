import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UseListComponent } from './use-list/use-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { DisplayItemsComponent } from './manage-items/display-items/display-items.component';
import { AddeditItemsComponent } from './manage-items/addedit-items/addedit-items.component';

import { ManageShopsComponent } from './manage-shops/manage-shops/manage-shops.component';
import { DisplayShopsComponent } from './manage-shops/display-shops/display-shops.component';
import { AddeditShopsComponent } from './manage-shops/addedit-shops/addedit-shops.component';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/uselist', pathMatch: 'full' },
  { path: 'uselist', component: UseListComponent, canActivate: [AuthGuard] },
  { path: 'createlist', component: CreateListComponent, canActivate: [AuthGuard] },
  {
    path: 'items', component: ManageItemsComponent, canActivate: [AuthGuard], children: [
      { path: 'display', component: DisplayItemsComponent, canActivate: [AuthGuard] },
      { path: 'new', component: AddeditItemsComponent, canActivate: [AuthGuard] },
      { path: ':id/edit', component: AddeditItemsComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'shops', component: ManageShopsComponent, canActivate: [AuthGuard], children: [
      { path: 'display', component: DisplayShopsComponent, canActivate: [AuthGuard] },
      { path: 'new', component: AddeditShopsComponent, canActivate: [AuthGuard] },
      { path: ':id/edit', component: AddeditShopsComponent, canActivate: [AuthGuard]}
    ]    
  },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'logout',component: SigninComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
