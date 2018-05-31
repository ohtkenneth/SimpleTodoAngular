import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  allTasks = [];

  allTasksCompleted = true;

  constructor() { }

  ngOnInit() {
  }

  onNewTaskAdded(newTask) {
    this.allTasksCompleted = this.allTasks.length === 0 ? true : false;
    this.allTasks.push({
      taskDescription: newTask.taskDescription,
      isTaskActive: newTask.isTaskActive
    });
  }

  onTaskCompleted(taskIndex) {
    // take taskIndex and remove it from allTasks
    this.allTasks.splice(taskIndex, 1);
  }
}

// by default app shows active tasks
// when completed tasks is selected in header, emit event that filters allTasks for tasks with taskStatus = 'complete';
