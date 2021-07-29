import { DatePipe } from '@angular/common';
import { add, featureSelector, statusSelector } from './../reducers/form';
import { Component, OnInit } from '@angular/core';
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
  

  constructor(public dataService: DataServiceService,
    public toastService: ToastService,
    public store:Store,
    private datepipe:DatePipe) {}

  ngOnInit(): void {
    
  }
  
  addTask() {                  
    this.store.dispatch(add(
      {
        name: this.formForm.value['name'],
        description: this.formForm.value['description'],
        date: this.datepipe.transform(Date.now(), "dd MMM yyyy HH:mm"),
        status: this.formForm.value['status']
      }
    ));

    this.formForm.setValue({
      name: "",
      description: "",
      status: ""
    });
  }
}


