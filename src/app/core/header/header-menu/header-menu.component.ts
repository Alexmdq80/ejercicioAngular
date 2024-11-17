import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  @Input() menuItems?: {
    text: string,
    route: string
  }[];
}
