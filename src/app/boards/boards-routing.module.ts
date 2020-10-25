import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBoardComponent } from './home-board/home-board.component';
import { BoardContentComponent } from './board-content/board-content.component';

const routes: Routes = [
    {path:'boards',component:HomeBoardComponent},
    {path:'create-boards',component:BoardContentComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoardsRoutingModule { }
