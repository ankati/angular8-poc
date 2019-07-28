import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageServiceService } from '../message-service.service';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor(private ms:MessageServiceService) { 
  }

  ngOnInit() {
  }
  onClick(){
    console.log();
  }
}
