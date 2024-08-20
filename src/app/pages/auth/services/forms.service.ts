import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  public constructor(private formBuilder: FormBuilder) {
    this.createLoginForm();
  }

  public createLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(8),
      ]],
    });
  }
}
