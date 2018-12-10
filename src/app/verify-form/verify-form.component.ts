import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.scss']
})
export class VerifyFormComponent {



  public verifyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.creatForm();
  }

  creatForm() {
    this.verifyForm = this.fb.group({
      name: [null, Validators.required],
      id: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      birth: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      phone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      days: [0, [Validators.required, Validators.min(1)]],
      email: [null, [Validators.required, Validators.email]],
    });
  }




}
