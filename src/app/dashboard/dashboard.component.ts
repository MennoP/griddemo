import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, ViewChildren} from '@angular/core';
import {Item} from '../tile/item';
import {TileLoaderDirective} from '../tile-loader.directive';
import {GridsterConfig} from 'angular-gridster2';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @Input() items: Item[];
    // @ViewChildren(TileLoaderDirective) tileLoad: TileLoaderDirective[];

    options: GridsterConfig;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        // this.loadComponent();

        this.options = {
            gridType: 'scrollVertical',
            minCols: 10,
            minRows: 10,
            maxCols: 10,
            maxRows: 10,
            defaultItemCols: 1, // default width of an item in columns
            defaultItemRows: 1, // default height of an item in rows
        };
    }

    // loadComponent() {
    //     for (let i = 0; i < this.items.length; i++) {
    //
    //         const item = this.items[i];
    //
    //         const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
    //
    //         const viewContainerRef = this.tileLoad[i].viewContainerRef;
    //         viewContainerRef.clear();
    //
    //         const componentRef = viewContainerRef.createComponent(componentFactory);
    //         (<TileComponent>componentRef.instance).data = item.data;
    //     }
    // }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
