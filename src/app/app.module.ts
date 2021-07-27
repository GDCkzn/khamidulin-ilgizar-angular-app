import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    HeaderComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
