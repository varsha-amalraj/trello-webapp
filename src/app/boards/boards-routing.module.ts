import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBoardComponent } from './home-board/home-board.component';

const routes: Routes = [
    {path:'boards',component:HomeBoardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoardsRoutingModule { }
