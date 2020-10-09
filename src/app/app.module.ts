import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePersonComponent } from './Person/create-person/create-person.component';
import { PersonInfoComponent } from './Person/person-info/person-info.component';
import { BasicDirective } from './basic-directive.directive';
import { BetterDirective } from './better-directive.directive';
import { UnlessDirective } from './unless-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePersonComponent,
    PersonInfoComponent,
    BasicDirective,
    BetterDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
