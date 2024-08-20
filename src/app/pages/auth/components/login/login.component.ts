import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { IonButton, IonIcon, IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { FormsService } from '../../services/forms.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { eye, mail } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [IonInput, IonIcon, IonButton, IonInputPasswordToggle, ReactiveFormsModule, CommonModule, FormsModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup([]);

  public constructor(
    private formsService: FormsService,
    private router: Router
    ) {
    addIcons({ eye, mail });
  }

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formsService.createLoginForm();
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      this.validateAllFields();
      return;
    }

    this.submitForm();
  }

  private submitForm(): void {
    this.router.navigateByUrl('tabs', {
      skipLocationChange: false,
    });
  }

  private validateAllFields(): void {
    this.form.markAllAsTouched();
    this.form.markAsPristine();
  }
}
