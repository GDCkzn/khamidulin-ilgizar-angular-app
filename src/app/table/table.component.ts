import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, pipe, Subject, BehaviorSubject } from 'rxjs';
import { filter, isEmpty, last, map, startWith, tap} from 'rxjs/operators';
import { statusSelector } from '../reducers/form';
import { DataServiceService, TaskElement } from '../services/data-service.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent implements OnInit {
  status = new FormControl('All');
  
  tasks$: Observable<TaskElement[]>;




  columns = [{ prop: 'name' }, { name: 'Description' }, { name: 'Date' }, { name: 'Status' }];
  
  constructor(public dataService: DataServiceService, public router:Router, public toastService: ToastService, public store:Store) {
    
    this.store.select(statusSelector).subscribe( status =>{
      this.status.setValue(status);
    });
    
    this.tasks$ = combineLatest([this.dataService.getTasksStream(), this.status.valueChanges.pipe(startWith(this.status.value))]).pipe(
      map(([tasks, status]) => {
        if(status !== "All")  tasks = tasks.filter(task => task.status === status);
        this.toastService.show(`Tasks count: ${tasks.length}`, { classname: 'bg-success text-light', delay: 2000 });
        return tasks
      }));
  }

  ngOnInit(): void {

  }
}
