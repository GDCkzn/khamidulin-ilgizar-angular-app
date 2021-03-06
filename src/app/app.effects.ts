import { ToastService } from './services/toast.service';
import { DataServiceService } from './services/data-service.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { add } from './reducers/form';
import { map } from 'rxjs/operators';
import { pop } from './reducers/notifications';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, public dataService: DataServiceService, public toastService: ToastService) {}

  addData$ = createEffect(() => this.actions$.pipe(
    ofType(add),
    map((data) =>{
      this.dataService.addTask(data);
      return pop({count: this.dataService.getTasksStream().getValue().length});
    })
  ));

  popToast$ = createEffect(() => this.actions$.pipe(
    ofType(pop),
    map((notification) =>{
      this.toastService.show(`Tasks count: ${notification.count}`, { classname: 'bg-success text-light', delay: 3000 });
    })
  ), {dispatch: false});
}
