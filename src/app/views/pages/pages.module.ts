import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { OfficeDetailComponent } from './office-detail/office-detail.component';
import { OfficeCreateEditComponent } from './office-create-edit/office-create-edit.component';
import { OfficeListPageComponent } from './office-list-page/office-list-page.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    OfficeListPageComponent,
    OfficeDetailComponent,
    OfficeCreateEditComponent,
    OfficeListPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
  ],
  exports: [
    OfficeListPageComponent,
    OfficeDetailComponent,
    OfficeCreateEditComponent
  ]
})
export class PagesModule { }
