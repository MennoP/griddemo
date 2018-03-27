import {Type} from '@angular/core';

export class Item {
    constructor(public component: Type<any>, public rows: number, public cols: number,
                public x: number, public y: number, public data: any) {
    }
}
