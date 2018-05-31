import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // define what a task is
  @Input() task: { taskDescription: string, isTaskActive: boolean };
  @Input() taskIndex: { index: number };

  @Output() taskCompleted = new EventEmitter <{ index: string }> ();

  constructor() { }

  ngOnInit() {
  }

  onTaskCompleted(event) {
    this.taskCompleted.emit({ index: event.srcElement.id })
  }
}

// needs a button to delete the task
