import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-app';
  getperson(bruce:string){
    console.log(bruce);
    return bruce;
  }
  getN(wayne){
    console.log(wayne);
    return wayne;
  }
  colorr(red){
    console.log(red);
    return red;
  }
name="bruce"
disabledBox=true
enableInput(){
  this.disabledBox=false
  this.name="ram"
}
nname="bruce"
myplaceholder="enter the name"
disableBox=true
enablenput(){
  this.disableBox=false
  this.myplaceholder=this.nname;
 
}
day=false
people=[
  {
    name: "ramanath "
  },
  {
    name: "kamath"
  },
  {
  name: "udupi"
  },
  {
    name: "karnataka"
  },
  {
    name: "india"
  }
]
person="Sohan"
}
