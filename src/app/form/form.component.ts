import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataServiceService } from '../services/data-service.service';
import { ToastService } from '../services/toast.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent implements OnInit {
  name = new FormControl('',[
    Validators.required,
  ]);
  description = new FormControl('',[
    Validators.required,
  ]);
  status = new FormControl('',[
    Validators.required
  ]);
  

  formattedDate;

  constructor(public dataService: DataServiceService, public toastService: ToastService) {
    const datepipe: DatePipe = new DatePipe('en-En')
    this.formattedDate = datepipe.transform(Date.now(), 'dd MMM YYYY HH:mm')
  }

  ngOnInit(): void {
  
  }
  
  addTask() {
    this.dataService.addTask({
      name: this.name.value,
      description: this.description.value,
      date: this.formattedDate,
      status: this.status.value
    });
  }
}
