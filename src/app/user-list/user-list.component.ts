import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `<h1> template is working</h1>
  <h1>{{name}} good morning</h1>
  <h1 *ngIf="day else elseBlock">hello</h1>

<ng-template #elseBlock><h1>ramanath</h1></ng-template> `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  day=true
  name="ramanath kamath"
  disabledBox=true
  enableInput(){
    this.disabledBox=false
    this.name="ram"
  }
}
