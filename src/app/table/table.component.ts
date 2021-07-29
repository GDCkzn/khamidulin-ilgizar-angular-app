import { tasksSelector } from './../reducers/table';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, pipe, Subject, BehaviorSubject } from 'rxjs';
import { filter, isEmpty, last, map, startWith, tap} from 'rxjs/operators';
import { filterSelector, filterTable } from '../reducers/filter';
import { statusSelector } from '../reducers/form';
import { pop } from '../reducers/notifications';
import { DataServiceService, TaskElement } from '../services/data-service.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent implements OnInit {
  status = new FormControl();
  
  tasks$: Observable<TaskElement[]>;;
  columns = [{ prop: 'name' }, { name: 'Description' }, { name: 'Date' }, { name: 'Status' }];
  
  constructor(
    //private dataService: DataServiceService,
    private toastService: ToastService, 
    private store:Store
  ){
    this.store.select(statusSelector).subscribe( status =>{
      this.status.setValue(status);
    });
    this.tasks$ = combineLatest([this.store.select(tasksSelector), this.status.valueChanges.pipe(startWith(this.status.value))]).pipe(
      map(([tasks, status]) => {
        if(status !== "All")  tasks = tasks.filter(task => task.status === status);
        this.store.dispatch(pop({count: tasks.length}));
        return tasks
      }));
  }

  ngOnInit(): void {
    this.status.valueChanges.subscribe(status =>{
      this.store.dispatch(filterTable({status: status}));
    });
  }
}
