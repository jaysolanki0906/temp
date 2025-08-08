import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms-component.component.html',
  styleUrl: './forms-component.component.scss'
})
export class FormsComponentComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log('Form Data:', this.myForm.value);
    } else {
      this.myForm.markAllAsTouched(); 
    }
  }

  get f() {
    return this.myForm.controls;
  }
}
