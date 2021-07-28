import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';



export interface TaskElement {
  name?: string;
  description?: string;
  date?: any;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public tasks$ = new BehaviorSubject<TaskElement[]>([]);

  constructor() {}
  
  getTasksStream(){
    return this.tasks$;
  }
  
  addTask(task: TaskElement){
    this.tasks$.next([...this.tasks$.getValue(), task])
  }
}



