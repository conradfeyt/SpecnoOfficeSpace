import { Component, Inject } from '@angular/core';

import { OfficeService } from 'src/app/providers/office.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Icon } from 'src/app/enums/icons';


interface DialogData { 
  name: string
}

@Component({
  selector: 'app-office-delete-dialog',
  templateUrl: './office-delete-dialog.component.html',
  styleUrls: ['./office-delete-dialog.component.scss']
})
export class OfficeDeleteDialogComponent {
  icons = Icon;
  constructor(
    private officeService: OfficeService,
    public dialogRef: MatDialogRef<OfficeDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

}
