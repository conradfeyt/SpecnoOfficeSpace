import { Component, OnInit } from '@angular/core';
import { Icon } from 'src/app/enums/icons';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

import { NewStaffMemberDialogComponent } from '../../components/new-staff-member-dialog/new-staff-member-dialog.component';
import { Office } from 'src/app/models/office_model';

import { MatSnackBar } from '@angular/material/snack-bar';
import { OfficeSnackBarComponent } from '../../components/office-snack-bar/office-snack-bar.component'; 
import { OfficeService } from 'src/app/providers/office.service';

@Component({
  selector: 'app-office-detail',
  templateUrl: './office-detail.component.html',
  styleUrls: ['./office-detail.component.scss']
})
export class OfficeDetailComponent implements OnInit {

  officeId: string | undefined;
  icons = Icon;
  thisOffice: Office | undefined;
  isLoading = false;

  constructor(
    public dialog: MatDialog, 
    private _snackBar: MatSnackBar,
    public route: 
    ActivatedRoute,
    public router: 
    Router, 
    private officeService: OfficeService
  ) {
    this.officeId = this.route.snapshot.paramMap.get('id') ?? undefined;
    this.officeService.offices.subscribe(value=>{
      if(this.officeId) {
        this.thisOffice = value.find((_office)=>{return _office.id == this.officeId});
      }
    });
   }

  async ngOnInit(): Promise<void> {

    if(this.officeId && !this.thisOffice) {
      this.isLoading = true;
      this.thisOffice = await this.officeService.getOfficeById(this.officeId);
      this.isLoading = false;
    }
  }
  goBack() {
    this.router.navigateByUrl('/');
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewStaffMemberDialogComponent, {
      width: 'calc(100% - 2rem)',
      maxWidth: '350px',
      data: {officeId: this.officeId, memberId: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        this._snackBar.openFromComponent(OfficeSnackBarComponent, {
          data:{
            message: "User added"
          },
          duration: 2000,
        });
      }
    });
  }

}
