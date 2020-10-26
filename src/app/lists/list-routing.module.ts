import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { AddListComponent } from './add-list/add-list.component';

const routes: Routes = [
  {path:'list', component: HomeListComponent},
  {path:'create-list', component: AddListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
