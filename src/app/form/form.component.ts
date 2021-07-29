import { add, featureSelector, statusSelector } from './../reducers/form';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataServiceService } from '../services/data-service.service';
import { ToastService } from '../services/toast.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';


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
  
  form$ = this.store.select(statusSelector);

  constructor(public dataService: DataServiceService, public toastService: ToastService, public store:Store) {}

  ngOnInit(): void {
    
  }
  
  addTask() {                  
    this.store.dispatch(add(
      {
        name: this.formForm.value['name'],
        description: this.formForm.value['description'],
        date: Date.now(),
        status: this.formForm.value['status']
      }
    ));
    // this.dataService.addTask({
    //   name: this.formForm.value['name'],
    //   description: this.formForm.value['description'],
    //   date: this.formattedDate,
    //   status: this.formForm.value['status']
    // });
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

