import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePersonComponent } from './Person/create-person/create-person.component';
import { PersonInfoComponent } from './Person/person-info/person-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePersonComponent,
    PersonInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
