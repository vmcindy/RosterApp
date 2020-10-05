import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePersonComponent } from './Person/create-person/create-person.component';
import { PersonInfoComponent } from './Person/person-info/person-info.component';
import { BasicDirectiveDirective } from './basic-directive.directive';
import { BetterDirectiveDirective } from './better-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePersonComponent,
    PersonInfoComponent,
    BasicDirectiveDirective,
    BetterDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
