import { Component, OnInit, Input } from '@angular/core';
import { Icon } from 'src/app/enums/icons';
import { Colors } from 'src/app/enums/colors';
import { Router } from '@angular/router';

import { Office } from 'src/app/models/office_model';
import { OfficeService } from 'src/app/providers/office.service';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss']
})
export class OfficeCardComponent implements OnInit {
  panelOpenState = false;
  icons = Icon;
  colors = Colors;
  opened = false;
  titleHovering = false;
  descriptionHovering = false;

  @Input() thisOffice: Office| undefined;

  constructor(public router: Router, private officeService: OfficeService) { }
  
  ngOnInit(): void {
  }

  editOffice() {
    this.router.navigateByUrl('/edit-office/'+(this.thisOffice?.id ?? 1));
  }

  toggelTitleHovering() {
    this.titleHovering = !this.titleHovering;
  }

  public getMySidebar(color: string): string {
    let keyTyped = color as keyof typeof Colors;
    return Colors[keyTyped].hex;
  }

  navigate() {
    this.router.navigateByUrl('/view-office/'+(this.thisOffice?.id ?? 1));
  }

}  




