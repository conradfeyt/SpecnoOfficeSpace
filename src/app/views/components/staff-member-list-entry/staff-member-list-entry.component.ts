import { Component, OnInit, Input } from '@angular/core';
import { Avatar, geAvatarUrls } from 'src/app/enums/avatar';
import { Icon } from 'src/app/enums/icons';
import { StaffMember } from 'src/app/models/staff_model';
import { StaffOptionDialogComponent } from '../staff-option-dialog/staff-option-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NewStaffMemberDialogComponent } from '../new-staff-member-dialog/new-staff-member-dialog.component';
import { OfficeService } from 'src/app/providers/office.service';
import { OfficeSnackBarComponent } from '../../components/office-snack-bar/office-snack-bar.component'; 
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-staff-member-list-entry',
  templateUrl: './staff-member-list-entry.component.html',
  styleUrls: ['./staff-member-list-entry.component.scss']
})

export class StaffMemberListEntryComponent implements OnInit {
  @Input() member: StaffMember | undefined;
  @Input() officeId: string | undefined;
  icons = Icon;
  employeeName: String = "Eric Hodges";
  employeeAvatar:  String = Avatar.balloons;


  
  constructor(
    public dialog: MatDialog, 
    private snackbar: MatSnackBar,
    private  officeService : OfficeService,
    ) { }

  getUrl(name: string) {
    return geAvatarUrls(name);
  }

  openDialog() {
    const dialogRef = this.dialog.open(StaffOptionDialogComponent, {
      width: 'calc(100% - 2rem)',
      maxWidth: '345px',
      data: {
        officeId: this.officeId,
        memberId: this.member!.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result == 'isDelete') {
          this.officeService.deleteMember(this.officeId!, this.member!.id);
          this.snackbar.openFromComponent(OfficeSnackBarComponent, {
            data:{
              message: "User deleted"
            },
            duration: 2000,
          });
        } else if (result == 'isEdit') {
          const dialogRef2  = this.dialog.open(NewStaffMemberDialogComponent, {
            width: 'calc(100% - 2rem)',
            maxWidth: '345px',
            data: {
                officeId: this.officeId,
                memberId: this.member?.id
              }
            });
            dialogRef2.afterClosed().subscribe(result => {
              if(result) {
                this.snackbar.openFromComponent(OfficeSnackBarComponent, {
                  data:{
                    message: "User updated"
                  },
                  duration: 2000,
                });
              }
            })
        }
    });
  }
        

  ngOnInit(): void {
  }

}
