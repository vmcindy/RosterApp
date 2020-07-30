import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonInfoComponent implements OnInit {
  @Input('prsn') person: {type: string, firstName: string, lastName: string, age: string};

  constructor() { }

  ngOnInit(): void {
  }

}
