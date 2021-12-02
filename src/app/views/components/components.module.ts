import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { OfficeCardComponent } from './office-card/office-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';

import { SpecnoIconComponent } from './specno-icon/specno-icon.component';
import { SideColorBarComponent } from './side-color-bar/side-color-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OfficeDeleteDialogComponent } from './office-delete-dialog/office-delete-dialog.component';
import { OfficeSnackBarComponent } from './office-snack-bar/office-snack-bar.component'

@NgModule({
  declarations: [
    OfficeCardComponent,
    SearchBarComponent,
    ColorSelectorComponent,
    AvatarSelectorComponent,
    SpecnoIconComponent,
    SideColorBarComponent,
    OfficeDeleteDialogComponent,
    OfficeSnackBarComponent,

  ],
  imports: [
    CommonModule,
    StaffMemberListModule
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    OfficeCardComponent,
    ColorSelectorComponent,
    SpecnoIconComponent,
    OfficeSnackBarComponent

  ]
})
export class ComponentsModule { }
