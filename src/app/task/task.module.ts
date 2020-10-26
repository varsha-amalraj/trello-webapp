import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskRoutingModule } from './task-routing.module';



@NgModule({
  declarations: [AddTaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
