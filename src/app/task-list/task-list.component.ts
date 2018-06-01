import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() filterTasksBy: string;

  allTasks = [];
  allTasksCompleted = true;
  taskFilter = this.filterTasksBy || 'active';
  filteredTasks = allTasks.filter((task) => {
    return task.taskStatus === this.taskFilter;
  });

  constructor() { }

  ngOnInit() {
  }

  onNewTaskAdded(newTask) {
    this.allTasksCompleted = this.allTasks.length === 0 ? true : false;
    this.allTasks.push({
      taskDescription: newTask.taskDescription,
      taskStatus: newTask.taskStatus
    });
  }

  onTaskCompleted(taskIndex) {
    // take taskIndex and remove it from allTasks
    this.allTasks.splice(taskIndex, 1);
  }
}

// by default app shows active tasks
// when completed tasks is selected in header, emit event that filters allTasks for tasks with taskStatus = 'complete';
