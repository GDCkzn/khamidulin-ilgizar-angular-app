import { addToTable } from './reducers/table';
import { DataServiceService } from './services/data-service.service';
import { ToastService } from './services/toast.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private store:Store, private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.getTasksStream().subscribe( tasks =>{
      this.store.dispatch(addToTable({data: tasks}));
    });
  }
}
