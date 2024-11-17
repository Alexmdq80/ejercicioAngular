import { Component } from '@angular/core';
import { SubmitButtonComponent } from '../../../core/submit-button/submit-button.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [SubmitButtonComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

}
