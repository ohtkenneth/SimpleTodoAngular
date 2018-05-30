import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})

export class TaskInputComponent implements OnInit {
 // @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() newTaskCreated = new EventEmitter<{ taskDescription: string, isTaskActive: boolean }> ();

  newTaskDescription: '';

  constructor() { }

  ngOnInit() {
  }

  onAddNewTask() {
    console.log(this.newTaskDescription);
    this.newTaskDescription = '';
    this.newTaskCreated.emit({
      taskDescription: this.newTaskDescription,
      isTaskActive: true
    })
  }
}

// when using two way binding, need to import formsmodule in app module
// when using events, need to define event emitters in emitting component, with Output imports
// event emitters become property binds in PARENT COMPONENT on the child component tag
  // when event is clicked in component, actually emit the events with component data