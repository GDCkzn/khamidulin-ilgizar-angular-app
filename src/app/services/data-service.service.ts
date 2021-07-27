import { from, merge, Observable } from 'rxjs';
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
  public tasksStream = new Observable<TaskElement>();
  constructor() {}
 
  getTasksStream() : Observable<TaskElement>{
    return this.tasksStream;
  }
  addTasks(stream: any){
    this.tasksStream = merge(this.tasksStream, stream)
  }
}



