import { BehaviorSubject, from, ReplaySubject, Subject } from 'rxjs';
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

  public tasks$ = new BehaviorSubject<TaskElement[]>([
    //Fake data//
    {
      name: "Task 1",
      description: "Lorem ipsum",
      date: "28 Jul 2021 13:41",
      status: "Done",
    },
    {
      name: "Task 2",
      description: "Lorem ipsum",
      date: "29 Jul 2021 13:42",
      status: "ToDo",
    },
    {
      name: "Task 3",
      description: "Lorem ipsum",
      date: "9 Jul 2021 13:45",
      status: "InProgress",
    },
    {
      name: "Task 4",
      description: "Lorem ipsum",
      date: "31 Jul 2021 13:46",
      status: "Done",
    }
  ]);
  //----//
  constructor() {}

  getTasksStream(){
    return this.tasks$;
  }

  addTask(task: TaskElement){
    this.tasks$.next([...this.tasks$.getValue(), task])
  }
}



