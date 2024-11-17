import { Component } from '@angular/core';
import { OutlineButtonComponent } from '../outline-button/outline-button.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    OutlineButtonComponent,
    HeaderMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    {text: 'Páginas Gratis', route: '/free-landing-pages'},
    {text: 'Características', route: '/features'},
    {text: 'Servicios', route: '/services'},
    {text: 'Precios', route: '/pricing'},
    {text: 'Contacto', route: '/contact'}
  ]
}
