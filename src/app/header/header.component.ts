import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() filterTasks = new EventEmitter <{ filterTasksBy: string }> ();

  constructor() { }

  ngOnInit() {
  }

  onFilterTasks(filter) {
    this.filterTasks.emit({ filterTasksBy: filter })
  }

}
