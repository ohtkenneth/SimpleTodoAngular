import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // define what a task is
  @Input() task: { taskDescription: string, taskStatus: string };
  @Input() taskIndex: { index: number };

  @Output() taskCompleted = new EventEmitter <{ index: string }> ();
  @Output() editTask = new EventEmitter <{ index: string, taskDescription: string }> ();

  constructor() { }

  ngOnInit() {
  }

  onTaskCompleted(event) {
    this.taskCompleted.emit({ index: event.srcElement.id })
  }
  onEditTask({ taskIndex, taskDescription }) {
    this.editTask.emit({ taskIndex, taskDescription })
  }
}

// needs a button to delete the task
