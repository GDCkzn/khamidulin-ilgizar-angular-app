import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest, Observable, pipe, Subject, BehaviorSubject } from 'rxjs';
import { filter, isEmpty, map, startWith, tap} from 'rxjs/operators';
import { DataServiceService, TaskElement } from '../services/data-service.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent implements OnInit {
  status = new FormControl('All');
  
  tasks$: Observable<TaskElement[]>;
  status$: Observable<String>;

  columns = [{ prop: 'name' }, { name: 'Description' }, { name: 'Date' }, { name: 'Status' }];
  
  constructor(public dataService: DataServiceService, public router:Router, public toastService: ToastService) {
    this.tasks$ = this.dataService.getTasksStream();
    this.status$ = this.status.valueChanges;
  }

  ngOnInit(): void {
    this.tasks$ = combineLatest([this.tasks$, this.status$.pipe(startWith('All'))]).pipe(
      map(([tasks, status]) => {
        if(status !== "All")  tasks = tasks.filter(task => task.status === status);
        this.toastService.show(`Tasks count: ${tasks.length}`, { classname: 'bg-success text-light', delay: 2000 });
        return tasks
      }));
  }
}
