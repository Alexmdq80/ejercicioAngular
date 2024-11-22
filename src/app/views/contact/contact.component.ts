import { Component } from '@angular/core';
import { ContactForm } from '../../core/model/contact-form.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitButtonComponent } from '../../core/submit-button/submit-button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SubmitButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formModel = { 
    subject: '',
    email: '',
    message: ''
  } as ContactForm; 

  submitForm() {
    console.log(this.formModel);
  }
}
