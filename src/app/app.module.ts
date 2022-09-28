import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { QtySelectorComponent } from './qty-selector/qty-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DayComponent,
    WeekComponent,
    QtySelectorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
