import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MessageServiceService } from '../message-service.service';
import { UtilService } from '../util.service';
import { pairwise, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit, DoCheck {
  firstName = new FormControl('');
  lastName = new FormControl('');
  firstName1 = new FormControl('');
  lastName1 = new FormControl('');
  profileForm = new FormGroup({ firstName: this.firstName, lastName: this.lastName });
  profileForm1 = new FormGroup({ firstName: this.firstName1, lastName: this.lastName1 });
  fb = new FormBuilder();
  old: any;
  constructor(private ms: MessageServiceService, private UtilService: UtilService) {
    this.firstName.setValue("kranthi")
    this.UtilService.setCurrentComponent(this);
    this.old = this.profileForm.getRawValue();
    this.profileForm
      .valueChanges
      .subscribe(next => {
        this.UtilService.setUnsaved(true);
        console.log("jjjj");
      });

      
      this.profileForm.statusChanges.subscribe(
        status => {
           console.log('Username validation status: '+ status);
        }
      );   
    this.fb.group(this.profileForm);
    this.profileForm.addControl("profileForm1",this.profileForm1);
  }
  ngDoCheck() {
  }
  onClick() {
    console.log();
  }
  ngOnInit() {
    let kkk = this;
    this.ms.currentMessage.subscribe(message =>
      console.log("hhh")
    );
  }
}
