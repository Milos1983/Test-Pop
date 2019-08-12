import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { MenuComponent } from './page/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
