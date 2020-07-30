import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  @Output('stdntCreated') studentCreated = new EventEmitter<{fname: string, lname: string, age: string }>();
  @Output('staffCreated') staffCreated = new EventEmitter<{fname: string, lname: string, age: string }>();

  // newPersonFirstName = '';
  newPersonLastName = '';
  newPersonAge = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddStudent(firstNameInput: HTMLInputElement) {
    this.studentCreated.emit({
      fname: firstNameInput.value,
      lname: this.newPersonLastName,
      age: this.newPersonAge
    });
  }

  onAddStaff(firstNameInput: HTMLInputElement) {
    this.staffCreated.emit({
      fname: firstNameInput.value,
      lname: this.newPersonLastName,
      age: this.newPersonAge
    });
  }

}
