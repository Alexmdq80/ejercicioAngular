import { Component } from '@angular/core';
import { PresentationComponent } from "./presentation/presentation.component";
import { IconCardComponent } from "../../core/icon-card/icon-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [PresentationComponent, 
            IconCardComponent,
            CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {
  
  features = [
    {
      icon: 'add_box',
      title: 'Easy to Use',
      description: 'Editing with customizing Essential Landing is easy and fast'
    },
    {
      icon: 'star_half',
      title: '100% Responsive',
      description: 'Editing with customizing Essential Landing is easy and fast'
    },
    {
      icon: 'system_update_alt',
      title: '50+ New Pages',
      description: 'Editing with customizing Essential Landing is easy and fast'
    }
  ]

}