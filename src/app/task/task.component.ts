import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // define what a task is
  @Input() task: { taskDescription: string, isTaskActive: boolean };

  constructor() { }

  ngOnInit() {
  }

}
