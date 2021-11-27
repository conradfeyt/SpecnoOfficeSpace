import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeListComponent } from './office-list/office-list.component';
import { OfficeDetailComponent } from './office-detail/office-detail.component';
import { OfficeCreateEditComponent } from './office-create-edit/office-create-edit.component';



@NgModule({
  declarations: [
    OfficeListComponent,
    OfficeDetailComponent,
    OfficeCreateEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
