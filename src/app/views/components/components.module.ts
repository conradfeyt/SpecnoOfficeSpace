import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { OfficeCardComponent } from './office-card/office-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';

import { SpecnoIconComponent } from './specno-icon/specno-icon.component';
import { SideColorBarComponent } from './side-color-bar/side-color-bar.component';

@NgModule({
  declarations: [
    OfficeCardComponent,
    SearchBarComponent,
    ColorSelectorComponent,
    AvatarSelectorComponent,
    SpecnoIconComponent,
    SideColorBarComponent,
  ],
  imports: [
    CommonModule,
    StaffMemberListModule
    MatExpansionModule,
    MatButtonModule,
    OfficeCardComponent,
    SpecnoIconComponent,
  ]
})
export class ComponentsModule { }
