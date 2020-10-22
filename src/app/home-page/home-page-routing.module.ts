import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyContentComponent } from './body-content/body-content.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: BodyContentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
