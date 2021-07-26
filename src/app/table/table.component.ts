
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService, TaskElement } from '../services/data-service.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent implements OnInit {
  name: any;
  tasks: TaskElement[] = [];
  constructor(public dataService: DataServiceService, public router:Router, public toastService: ToastService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  deleteTask(){
    this.dataService.deleteTask(this.name);
    this.name = '';
    this.getTasks();
  }

  getTasks(){
    this.tasks = this.dataService.getTasks();
  }
}
