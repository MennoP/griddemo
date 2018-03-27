import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { GridsterModule } from 'angular-gridster2';
import { AppComponent } from './app.component';
import { TextComponent } from './tile/text/text.component';
import { TileLoaderDirective } from './tile-loader.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconComponent } from './tile/icon/icon.component';
import {TileComponent} from './tile/tile.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        TextComponent,
        IconComponent,
        TileLoaderDirective,
        DashboardComponent,
        IconComponent,
        TileComponent
    ],
    imports: [
        BrowserModule,
        GridsterModule,
        FormsModule
    ],
    entryComponents: [
       TextComponent,
        IconComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
