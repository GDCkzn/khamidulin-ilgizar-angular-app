import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataServiceService } from '../services/data-service.service';
import { ToastService } from '../services/toast.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent implements OnInit {
  formForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });
  


  formattedDate: any;

  constructor(public dataService: DataServiceService, public toastService: ToastService) {}

  ngOnInit(): void {
    
  }
  
  addTask() {                  
    const datepipe: DatePipe = new DatePipe('en-En')
    this.formattedDate = datepipe.transform(Date.now(), 'dd MMM YYYY HH:mm')
    this.dataService.addTask({
      name: this.formForm.value['name'],
      description: this.formForm.value['description'],
      date: this.formattedDate,
      status: this.formForm.value['status']
    });
    this.formForm.setValue({
      name: "",
      description: "",
      status: ""
    });
  }
}
function delay(arg0: number) {
  throw new Error('Function not implemented.');
}

