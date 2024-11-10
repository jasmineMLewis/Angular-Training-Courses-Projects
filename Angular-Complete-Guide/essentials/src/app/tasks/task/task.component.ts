import { Component, Input } from '@angular/core';

import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

// interface Task {
//   id: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  //@Output() complete = new EventEmitter<string>();

  //private tasksService = inject(TasksService);

  constructor(private tasksService: TasksService) {}

  onCompleteTask() {
   // this.complete.emit(this.task.id);
   this.tasksService.removeTask(this.task.id);
  }


}
