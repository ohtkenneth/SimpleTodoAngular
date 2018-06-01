import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  filter = '';

  onFilterTasks({ filterTasksBy }) {
    console.log(filterTasksBy);
    this.filter = filterTasksBy;
  }
}

// child header emits event to app parent
// app parent routes event to child task list component
