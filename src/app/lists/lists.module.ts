import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
  declarations: [HomeListComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListsModule { }
