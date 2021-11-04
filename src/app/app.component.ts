import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isActive:boolean=false;
isActivedecount:boolean=false;
Count:number=1;
deCount:number=20;
Increment(){


  this.Count++;
  this.isActive=true;
  if(this.deCount>20){
    this.deCount--;
    this.isActive=true;


  }


}
decrement(){
  this.deCount++;
  this.isActivedecount=true;
  
  if(this.Count>1){
    this.Count--;
    this.isActive=false;


  }
  }
  
}
