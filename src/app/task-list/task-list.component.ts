import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // detects change in filterTasksBy
  private _filter = '';
  @Input()
    set filter(filter: string) {
      this._filter = (filter || 'active');
      this.filterTasks();
    }
    get filter(): string {
      return this._filter;
    }

  allTasks = [];
  filteredTasks = this.filterTasks()
  allTasksCompleted = true;

  constructor() { }

  ngOnInit() {
  }

  onNewTaskAdded(newTask) {
    this.allTasksCompleted = this.allTasks.length === 0 ? true : false;
    this.allTasks.push({
      taskDescription: newTask.taskDescription,
      taskStatus: 'active'
    });
    this.filterTasks();
  }

  onTaskCompleted(taskIndex) {
    // take taskIndex and remove it from allTasks
    this.allTasks[0].taskStatus = 'complete';
    this.filterTasks();
  }

  onEditTask({ taskIndex, taskDescription }) {
    this.allTasks[taskIndex].taskDescription = taskDescription;
  }

  filterTasks() {
    this.filteredTasks = this.allTasks.filter((task) => {
      return task.taskStatus === this.filter;
    });
  }

  assertEquals(actual, expected, testName) {
    if (actual === expected) {
      console.log(`Test PASSED: [${testName}]`)
    } else {
      console.log(`Test FAILED: [${testName}]. Got "${actual}"", but expected "${expected}"`)
    }
  }


}

// by default app shows active tasks
// when completed tasks is selected in header, emit event that filters allTasks for tasks with taskStatus = 'complete';
