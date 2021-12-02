import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-color-bar',
  templateUrl: './side-color-bar.component.html',
  styleUrls: ['./side-color-bar.component.scss']
})

export class SideColorBarComponent implements OnInit {

  @Input() baseColor: string | undefined;
  constructor() { 
  }
  ngOnInit(): void {
  }

}
