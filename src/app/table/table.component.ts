import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { iif, Observable, pipe, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataServiceService, TaskElement } from '../services/data-service.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent implements OnInit {
  status = new FormControl("All");
  tasks$: Observable<TaskElement[]>;

  columns = [{ prop: 'name' }, { name: 'Description' }, { name: 'Date' }, { name: 'Status' }];
  
  constructor(public dataService: DataServiceService, public router:Router, public toastService: ToastService) {
    this.tasks$ = this.dataService.getTasksStream();
  }

  ngOnInit(): void {
    this.status.valueChanges.subscribe(val => {
      this.tasks$ = this.dataService.getTasksStream();
      if(val !== 'All'){
        this.tasks$ = this.tasks$.pipe(
          map(tasks => tasks.filter(task => task.status === val)))
      }
    });
  }
}
