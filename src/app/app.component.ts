import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'angular8-poc';
  ngOnInit() {
    var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= '../assets/elements/analytics-counter.js';
   head.appendChild(script);
   let ele= document.getElementById('select');
   ele.innerHTML='';
   let element=document.createElement('analytics-counter');
   ele.appendChild(element);
  }
  constructor(location: LocationStrategy){
    location.onPopState(() => {
      alert(window.location);
    });
    var persons = [
      {formLink : "Malcom", lastname: "Reynolds"},
      {formLink : "Kaylee", lastname: "Frye"},
      {formLink : "Jayne", lastname: "Cobb"}
    ];
   
  }
  getFullName(item:any,index:any) {
    //var fullname = [{item['formLink']:index}].join("");
    //return fullname;
  }
}
