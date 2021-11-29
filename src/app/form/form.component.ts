import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
  <form class="form" (ngSubmit)="onSubmit(myForm)"  #myForm="ngForm" >
  <div class="formm"><h1> Employee intrest survey form</h1>
  <div><label>Enter your name</label><input type="text" name="fname"  id="fname"  ngModel></div>&ensp;
  <div><label>Enter your department</label><input type="text" name="dname"  id="dname" ngModel></div>
  <div><label>tell us about ur intrest</label><input type="text" name="iname" id="inmae" ngModel></div>
  <div><label>Do you exercise at home? </label><input type="radio"name="yname" value="yes"  id="yname" ngModel>Yes &nbsp;<input type="radio" id="yname" name="yname" value="No" ngModel>No</div>
  <div><label>how do you like to read your favorite topics</label><input type="checkbox" id="tname" name="tname"value="Book" ngModel >Book &nbsp; <input type="checkbox" id="tname"  name="tname" value="online resources" ngModel>online resources &nbsp;<input type="checkbox" id="tname"  name="tname" value="phone apps" ngModel>phone apps &nbsp;<input type="checkbox" id="tname"   value="magazines" name="tname" ngModel>magazines </div>
  <div><label> what genre more do you like</label><select name="genre" id="role"   >
<option value="comedy" id="gname" name="gname"  ngModel>comedy</option>
<option value="action" id="gname"  name="gname" ngModel>action</option>
<option value="adventures" id="gname" name="gname" ngModel>
    adventures
</option>
<option value="horror" id="gname" name="gname" ngModel>horror</option>
</select></div>
<div><button type="submit" >Submit</button></div>
</div>
</form>
  `,
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
   
   }
   fname:string=' ';
   dname:string=' ';
   iname:string=' ';
   yname:string=' ';
   tname:string=' ';
   gname:string=' ';
   onSubmit(formValue:NgForm){
     console.log(formValue.value)
   }
  ngOnInit(): void {
  }
 

}
