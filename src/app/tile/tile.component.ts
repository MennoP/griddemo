import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver} from '@angular/core';
import {TileLoaderDirective} from '../tile-loader.directive';
import {Item} from './item';


@Component({
    selector: 'app-tile',
    template: '<ng-template tile-load></ng-template>'
})
export class TileComponent implements OnInit {
    @Input() item: Item;
    @ViewChild(TileLoaderDirective) tileLoad: TileLoaderDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.loadComponent();
    }

    loadComponent() {

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.component);

        const viewContainerRef = this.tileLoad.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<TileComponent>componentRef.instance).data = this.item.data;
    }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
