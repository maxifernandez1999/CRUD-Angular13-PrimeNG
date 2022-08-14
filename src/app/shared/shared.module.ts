//@angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { TableComponent } from './components/table/table.component';

//primeng
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports:[
    TableComponent
  ]
})
export class SharedModule { }
