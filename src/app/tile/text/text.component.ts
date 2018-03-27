import { Component, Input } from '@angular/core';
import {ModuleComponent } from '../module.component';
import {GridsterItem} from 'angular-gridster2';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements ModuleComponent, GridsterItem {
    @Input() data: any;
    @Input() rows: number;
    @Input() cols: number;
    @Input() x: number;
    @Input() y: number;
}
