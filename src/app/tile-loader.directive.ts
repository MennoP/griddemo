import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[tile-load]'
})
export class TileLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
