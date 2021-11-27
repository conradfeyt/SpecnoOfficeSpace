import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffMemberListComponent } from './staff-member-list.component';
import { StaffMemberListEntryComponent } from './staff-member-list-entry/staff-member-list-entry.component';



@NgModule({
  declarations: [
    StaffMemberListComponent,
    StaffMemberListEntryComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class StaffMemberListModule { }
