import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { Icon } from 'src/app/enums/icons';
import { FormControl, Validators } from '@angular/forms';
import { Office } from 'src/app/models/office_model';
import { MatDialog } from '@angular/material/dialog';
import { OfficeDeleteDialogComponent } from '../../components/office-delete-dialog/office-delete-dialog.component';
import { OfficeService } from 'src/app/providers/office.service';
import { StaffMember } from 'src/app/models/staff_model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OfficeSnackBarComponent } from '../../components/office-snack-bar/office-snack-bar.component';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-office-create-edit',
  templateUrl: './office-create-edit.component.html',
  styleUrls: ['./office-create-edit.component.scss']
})
export class OfficeCreateEditComponent implements OnInit {
  officeId: string | null;
  icons = Icon;
  myForm = new FormGroup({
    name : new FormControl(),
    address : new FormControl(),
    email : new FormControl('', Validators.email),
    contact : new FormControl(),
    capacity : new FormControl()
  });
  color : string = '';
  officeExists = false;
  isLoading= false;
  order : number = 0;
  members: StaffMember[] = [];
  showColorError = false;
  
  constructor(
    public route: ActivatedRoute, 
    public router: Router, 
    public location : Location, 
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private  officeService : OfficeService
  ) { 
    this.officeId = this.route.snapshot.paramMap.get('id');
   }

  async ngOnInit(): Promise<void> {
    if(this.officeId) {
      this.isLoading = true;
      let tempOffice = await this.officeService.getOfficeById(this.officeId);
      if (tempOffice) {
        this.myForm.get('name')!.setValue(tempOffice.name);
        this.myForm.get('address')!.setValue(tempOffice.address);
        this.myForm.get('email')!.setValue(tempOffice.email);
        this.myForm.get('contact')!.setValue(tempOffice.contactNumber);
        this.myForm.get('capacity')!.setValue(tempOffice.capacity);
        this.color = tempOffice.color;
        this.order = tempOffice?.order ?? 0;
        this.members = tempOffice?.members ?? [];
      }
      this.isLoading = false;

    }
  }

  selectColor(newColor: string) {
    this.color = newColor;
  }
  openDeleteDialog() {
    const dialogRef = this.dialog.open(OfficeDeleteDialogComponent, {
      width: 'calc(100% - 2rem)',
      maxWidth: '345px',
      data: {
        name: this.myForm.get('name')!.value
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.officeService.deleteOffice(this.officeId!);
          this._snackBar.openFromComponent(OfficeSnackBarComponent, {
            data:{
              message: `${this.myForm.get('name')!.value} Deleted`
            },
            duration: 2000,
          });
          this.goBack();
        }
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }
  createOffice() {
    if(this.color == '' || !this.myForm.valid) {
      this.myForm.markAllAsTouched();
      if (this.color == '') {
        this.showColorError = true;
      }
      return;
    }
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.showColorError = false;

    let tempOffice = new Office({id: this.officeId ?? '',
      name: this.myForm.get('name')!.value,
      address: this.myForm.get('address')!.value,
      email: this.myForm.get('email')!.value,
      contactNumber: this.myForm.get('contact')!.value,
      capacity: this.myForm.get('capacity')!.value,
      color: this.color,
      order: this.order,
      members: this.members,
    });

    this.officeId 
      ? this.officeService.updateOffice(tempOffice)
      : this.officeService.addOffice(tempOffice);

          this._snackBar.openFromComponent(OfficeSnackBarComponent, {
            data:{
              message: `${this.myForm.get('name')!.value} ${this.officeId ? 'updated' : 'added'}`
            },
            duration: 2000,
          });
    this.goBack();

  }

  goBack() {
    this.router.navigateByUrl('/');
  }

}
