import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataServiceService } from '../services/data-service.service';
import { ToastService } from '../services/toast.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent implements OnInit {
  name: string = "";
  description: string = "";
  status: string = "";

  formattedDate;

  constructor(public dataService: DataServiceService, public toastService: ToastService) {
    const datepipe: DatePipe = new DatePipe('en-En')
    this.formattedDate = datepipe.transform(Date.now(), 'dd MMM YYYY HH:mm')
  }

  ngOnInit(): void {
    
  }
  
  addTask() {
    if (this.name && this.description && this.status != ""){
      this.toastService.show('Success', { classname: 'bg-success text-light', delay: 3000 });
      this.dataService.addTask({
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
    this.toastService.show('Fill all of the field', { classname: 'bg-danger text-light', delay: 3000 });
    return;
  }
}
