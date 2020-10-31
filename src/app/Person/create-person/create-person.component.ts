import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RosterListService } from  'src/app/rosterList.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
  providers: []
})
export class CreatePersonComponent implements OnInit{

  @ViewChild('lastNameInput', {static:true}) lastNameInput: ElementRef;

  newPersonAge = '';

  constructor(private rosterListService: RosterListService ) { }

  ngOnInit() {}

  onStudentAdded(firstNameInput: HTMLInputElement) {
    this.rosterListService.addPerson('Student', firstNameInput.value, this.lastNameInput.nativeElement.value, this.newPersonAge);
  }

  onStaffAdded(firstNameInput: HTMLInputElement) {
    this.rosterListService.addPerson('Staff', firstNameInput.value, this.lastNameInput.nativeElement.value, this.newPersonAge);
  }


}
