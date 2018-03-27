import {Component, OnInit} from '@angular/core';

import {TextComponent} from './tile/text/text.component';
import {Item} from './tile/item';
import {IconComponent} from './tile/icon/icon.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    items: Item[] = [];
    className = '';

    constructor() { }

    ngOnInit() {

        this.items.push(new Item(TextComponent, 2, 1, 0, 0, {name: 'Olaf'}));
        this.items.push(new Item(IconComponent, 1, 1, 1, 0, {}));
    }

    onAdd(): void {

        this.items.push(new Item(IconComponent, 1, 1, 1, 0, {}));
        console.log(this.items);
    }
}
