import { TaskService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  name: any;
  constructor(public taskService: TaskService) { }

  ngOnInit(): void {

  }
  deleteTask(){
    this.taskService.deleteTask(this.name);
    this.name = '';
  }
}
