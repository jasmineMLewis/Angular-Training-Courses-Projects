
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
//import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './new-task/new-task-data.model';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;

  isAddingTask: boolean = false;


 // tasks = DUMMY_TASKS;

  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary:'Learn all the basics and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31'
  //   }
  //];

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) { }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  // onCancelAddTask() {
  //   this.isAddingTask = false;
  // }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   this.isAddingTask = false;
  // }
}
