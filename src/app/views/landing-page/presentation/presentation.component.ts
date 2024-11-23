import { Component } from '@angular/core';
import { SubmitButtonComponent } from '../../../core/submit-button/submit-button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [SubmitButtonComponent,
            ReactiveFormsModule
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  email = new FormControl('');

  updateEmail() {
    if (this.email.disabled) {
      this.email.setValue('Este input se habilitó');
      this.email.enable();
    } else {
      this.email.setValue('Este input se deshabilitó');
      this.email.disable();

    }

  }

}

