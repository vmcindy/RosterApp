import { Component } from '@angular/core';
import { RosterListService } from './rosterList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RosterListService]
})
export class AppComponent {
  rosterList: {type: string, firstName:string, lastName:string, age: string}[] = [];
  
  constructor(private rosterListService: RosterListService) {}

  ngOnInit() {
    this.rosterList = this.rosterListService.getList();
  }

  onChangeFirst() {
    let person = this.rosterList[0];
    person.type = "Prefect";
    this.rosterListService.updatePerson(0, person.type, person.firstName, person.lastName, person.age);
  }

  onDestroyFirst() {
    this.rosterListService.deletePerson(0);
  }

}
