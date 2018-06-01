import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})

export class TaskInputComponent implements OnInit {
 // @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() newTaskCreated = new EventEmitter<{ taskDescription: string }> ();

  newTaskDescription: '';

  constructor() { }

  ngOnInit() {
  }

  onAddNewTask() {
    console.log(this.newTaskDescription);
    this.newTaskCreated.emit({
      taskDescription: this.newTaskDescription;
    });
    this.newTaskDescription = '';
  }
}
