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

const appRoutes: Routes = [
  { path: '', redirectTo: '/uselist', pathMatch: 'full' },
  { path: 'uselist', component: UseListComponent },
  { path: 'createlist', component: CreateListComponent },
  {
    path: 'items', component: ManageItemsComponent, children: [
      { path: 'display', component: DisplayItemsComponent },
      { path: 'new', component: AddeditItemsComponent },
      { path: ':id/edit', component: AddeditItemsComponent }
    ]
  },
  {
    path: 'shops', component: ManageShopsComponent, children: [
      { path: 'display', component: DisplayShopsComponent },
      { path: 'new', component: AddeditShopsComponent },
      { path: ':id/edit', component: AddeditShopsComponent}
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
