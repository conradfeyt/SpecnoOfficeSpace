import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Icon } from 'src/app/enums/icons';
import { Office } from 'src/app/models/office_model';
import { OfficeService } from 'src/app/providers/office.service';
import { NewStaffMemberDialogComponent } from '../../components/new-staff-member-dialog/new-staff-member-dialog.component';
import { OfficeSnackBarComponent } from '../../components/office-snack-bar/office-snack-bar.component'; 


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
    private snackBar: MatSnackBar,
    private officeService: OfficeService,
    public route: ActivatedRoute,
    public router: Router, 
  ) {
    this.officeId = this.route.snapshot.paramMap.get('id') ?? undefined; //get office from router
    this.officeService.offices.subscribe(value=>{ //subscriber to office service and update page onchange
      if(this.officeId) {
        this.thisOffice = value.find((_office)=>{return _office.id == this.officeId});
      }
    });
   }

  async ngOnInit(): Promise<void> {

    if(this.officeId && !this.thisOffice) {
      this.isLoading = true;
      this.thisOffice = await this.officeService.getOfficeById(this.officeId); //initial fetch of office details
      this.isLoading = false;
    }
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public openDialog() {

    const dialogRef = this.dialog.open(NewStaffMemberDialogComponent, {
      width: 'calc(100% - 2rem)',
      maxWidth: '350px',
      data: {officeId: this.officeId, memberId: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        this.snackBar.openFromComponent(OfficeSnackBarComponent, {
          data:{
            message: "User added"
          },
          duration: 2000,
        });
      }
    });
    
  }

}
