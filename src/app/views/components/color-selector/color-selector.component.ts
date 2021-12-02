import { Component, OnInit, Input } from '@angular/core';
import { Colors } from 'src/app/enums/colors';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent implements OnInit {
  colors = Colors;

  @Output() newColorSelected = new EventEmitter<string>();
  @Input() selectedColor: string| undefined;
  @Input() error: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  select(color:string) {
    this.error = false;
    this.selectedColor = color;
    this.newColorSelected.emit(this.selectedColor);
  }

  public getMyColorValue(color: string): string {
    let keyTyped = color as keyof typeof Colors;
    return Colors[keyTyped].hex;
  }

}
