import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UseListComponent } from './use-list/use-list.component';
import { CreateListComponent } from './create-list/create-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/uselist', pathMatch: 'full' },
  { path: 'uselist', component: UseListComponent },
  { path: 'createlist', component: CreateListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
