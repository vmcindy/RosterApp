import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
  providers: [LoggingService]
})
export class CreatePersonComponent implements OnInit{

  @Output('stdntCreated') studentCreated = new EventEmitter<{fname: string, lname: string, age: string }>();
  @Output('staffCreated') staffCreated = new EventEmitter<{fname: string, lname: string, age: string }>();

  // newPersonFirstName = '';
  // newPersonLastName = '';

  @ViewChild('lastNameInput', {static:true}) lastNameInput: ElementRef;

  newPersonAge = '';

  constructor(private logService: LoggingService) { }

  ngOnInit(): void {
  }

  onAddStudent(firstNameInput: HTMLInputElement) {
    this.logService.logToConsole('onAddStudent method called');
    this.studentCreated.emit({
      fname: firstNameInput.value,
      lname: this.lastNameInput.nativeElement.value,
      age: this.newPersonAge
    });
  }

  onAddStaff(firstNameInput: HTMLInputElement) {
    this.logService.logToConsole('onAddStaff method called');
    this.staffCreated.emit({
      fname: firstNameInput.value,
      lname: this.lastNameInput.nativeElement.value,
      age: this.newPersonAge
    });
  }

}
