import { TaskService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  nonEmpty: boolean = true;

  name: string = "";
  description: string = "";
  status: string = "";

  isForm: boolean = true;
  formattedDate;

  constructor(public taskService: TaskService) {
    const datepipe: DatePipe = new DatePipe('en-En')
    this.formattedDate = datepipe.transform(Date.now(), 'dd MMM YYYY HH:mm')
  }

  ngOnInit(): void {

  }

  addTask() {
    if (this.name && this.description && this.status != ""){
      this.nonEmpty = true
      this.taskService.addTask({
        name: this.name,
        description: this.description,
        date: this.formattedDate,
        status: this.status
      });
      this.name= "";
      this.description = "";
      this.status = "";
      return;
    }
    this.nonEmpty = false
    return;
  }
}
