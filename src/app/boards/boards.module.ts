import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBoardComponent } from './home-board/home-board.component';
import { BoardsRoutingModule } from './boards-routing.module';



@NgModule({
  declarations: [HomeBoardComponent],
  imports: [
    CommonModule,
    BoardsRoutingModule
  ]
})
export class BoardsModule { }
