import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { AngularHeadComponent } from './angular-head/angular-head.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompTwoComponent,
    CompOneComponent,
    AngularHeadComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
