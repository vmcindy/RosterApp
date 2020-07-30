import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rosterList = [{type: 'Student', firstName: 'Ronald', lastName: 'Weasly', age : '11'}];


  onStudentAdded(personData : {fname: string, lname: string, age: string}) {
    this.rosterList.push({
      type: 'Student',
      firstName: personData.fname,
      lastName: personData.lname,
      age: personData.age
    });
  }

  onStaffAdded(personData : {fname: string, lname: string, age: string}) {
    this.rosterList.push({
      type: 'Staff',
      firstName: personData.fname,
      lastName: personData.lname,
      age: personData.age
    });
  }

}
