import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBoardComponent } from './home-board/home-board.component';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardContentComponent } from './board-content/board-content.component';


@NgModule({
  declarations: [HomeBoardComponent, BoardContentComponent],
  imports: [
    CommonModule,
    BoardsRoutingModule
  ]
})
export class BoardsModule { }
