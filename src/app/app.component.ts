import { DataServiceService } from './services/data-service.service';
import { ToastService } from './services/toast.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tasks-app';
  isHome: boolean = true;

  constructor(public toastService: ToastService, public dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getTasksStream().subscribe((tasks) => {
      let i = tasks.length 
      this.toastService.show(`Tasks count: ${i}`, { classname: 'bg-success text-light', delay: 3000 });
    })
  }
}
