import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  allTasks = [];
  filteredTasks = [];
  // task list has event listeners
  // when task is created in task input component, this is called

  constructor() { }

  ngOnInit() {
  }

  onNewTaskAdded(newTask) {
    this.filteredTasks.push({
      taskDescription: newTask.taskDescription,
      isTaskActive: newTask.isTaskActive
    });
  }
}
