import { Component, Input } from '@angular/core';
import {ModuleComponent } from '../module.component';
import {GridsterItem} from 'angular-gridster2';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.css']
})
export class IconComponent implements ModuleComponent, GridsterItem {
    @Input() data: any;
    @Input() rows: number;
    @Input() cols: number;
    @Input() x: number;
    @Input() y: number;
}
