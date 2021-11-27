import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeCardComponent } from './office-card/office-card.component';

import { StaffMemberListModule } from './staff-member-list/staff-member-list.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';


@NgModule({
  declarations: [
    OfficeCardComponent,
    SearchBarComponent,
    ColorSelectorComponent,
    AvatarSelectorComponent,
  ],
  imports: [
    CommonModule,
    StaffMemberListModule
  ]
})
export class ComponentsModule { }
