import { Component } from '@angular/core';
import { LoggingService } from './logging.service';
import { RosterListService } from './rosterList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, RosterListService]
})
export class AppComponent {
  rosterList: {type: string, firstName:string, lastName:string, age: string}[] = [];
  
  constructor(private logService: LoggingService, private rosterListService: RosterListService) {}

  ngOnInit() {
    this.rosterList = this.rosterListService.getList();
  }

  onStudentAdded(personData : {fname: string, lname: string, age: string}) {
    this.logService.logToConsole('onStudentAdded method called..!');
    this.rosterListService.addPerson('Student', personData.fname, personData.lname, personData.age);
  }

  onStaffAdded(personData : {fname: string, lname: string, age: string}) {
    this.logService.logToConsole('onStaffAdded method called..!');
    this.rosterListService.addPerson('Staff', personData.fname, personData.lname, personData.age);
  }

  onChangeFirst() {
    let person = this.rosterList[0];
    person.type = "Prefect";
    this.rosterListService.updatePerson(0, person.type, person.firstName, person.lastName, person.age);
    this.logService.logToConsole('onChangeFirst method called..!');
  }

  onDestroyFirst() {
    this.rosterListService.deletePerson(0);
    this.logService.logToConsole('onDestroyFirst method called..!');
  }

}
