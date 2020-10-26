import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { ListRoutingModule } from './list-routing.module';
import { AddListComponent } from './add-list/add-list.component';



@NgModule({
  declarations: [HomeListComponent, AddListComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListsModule { }
