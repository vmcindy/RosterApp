import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';
import { RosterListService } from  'src/app/rosterList.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
  providers: [LoggingService]
})
export class CreatePersonComponent implements OnInit{

  @ViewChild('lastNameInput', {static:true}) lastNameInput: ElementRef;

  newPersonAge = '';

  constructor(private logService: LoggingService, private rosterListService: RosterListService ) { }

  ngOnInit(): void {
  }

  onStudentAdded(firstNameInput: HTMLInputElement) {
    this.logService.logToConsole('onStudentAdded method called..!');
    this.rosterListService.addPerson('Student', firstNameInput.value, this.lastNameInput.nativeElement.value, this.newPersonAge);
  }

  onStaffAdded(firstNameInput: HTMLInputElement) {
    this.logService.logToConsole('onStaffAdded method called..!');
    this.rosterListService.addPerson('Staff', firstNameInput.value, this.lastNameInput.nativeElement.value, this.newPersonAge);
  }


}
