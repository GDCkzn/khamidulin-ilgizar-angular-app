import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


export interface TaskElement {
  name: string;
  description: string;
  date: any;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public tasks: TaskElement[] = [];

  constructor() { }

  columns = [{ prop: 'name' }, { name: 'Description' }, { name: 'Date' }, { name: 'Status' }];
  addTask(task: TaskElement){
      this.tasks.push(task);
      this.tasks = [...this.tasks];
  }
  deleteTask(name:string){
      this.tasks = this.tasks.filter(t => t.name !== name);
  }
  getTasksStream() : Observable<TaskElement>{
    return from(this.tasks)
  }
}
