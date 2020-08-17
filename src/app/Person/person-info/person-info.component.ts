import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonInfoComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('prsn') person: {type: string, firstName: string, lastName: string, age: string};

  @ViewChild('lastName', {static:true}) lastName: ElementRef;
  @ContentChild('bodyContent', {static:true}) bodyContent: ElementRef;

  constructor() { }

  ngOnChanges(){
    console.log('OnChanges Called..!');
    console.log('Last Name - ' + this.lastName.nativeElement.textContent);
    console.log('Body Content -' + this.bodyContent.nativeElement.textContent);
  }

  ngOnInit(): void {
    console.log('OnInit Called..!')
    console.log('Last Name - ' + this.lastName.nativeElement.textContent);
    console.log('Body Content -' + this.bodyContent.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('DoCheck Called..!'); 
    console.log('Last Name - ' + this.lastName.nativeElement.textContent);
    console.log('Body Content -' + this.bodyContent.nativeElement.textContent);    
  }

  ngAfterContentInit(){
    console.log('AfterContentInit Called..!'); 
    console.log('Last Name - ' + this.lastName.nativeElement.textContent);
    console.log('Body Content -' + this.bodyContent.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked Called..!'); 
    console.log('Last Name - ' + this.lastName.nativeElement.textContent);
    console.log('Body Content -' + this.bodyContent.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log('AfterViewInit Called..!'); 
    console.log('Last Name - ' + this.lastName.nativeElement.textContent);
    console.log('Body Content -' + this.bodyContent.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked Called..!'); 
    console.log('Last Name - ' + this.lastName.nativeElement.textContent);
    console.log('Body Content -' + this.bodyContent.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('OnDestroy Called..!'); 
    console.log('Last Name - ' + this.lastName.nativeElement.textContent);
    console.log('Body Content -' + this.bodyContent.nativeElement.textContent);
  }
  
}
