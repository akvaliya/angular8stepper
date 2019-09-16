import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-hstepper',
  templateUrl: './hstepper.component.html',
  styleUrls: ['./hstepper.component.scss']
})
export class HstepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
