import { Component } from '@angular/core';
import { OutlineButtonComponent } from '../outline-button/outline-button.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MenuItem } from '../model/menu-item.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    OutlineButtonComponent,
    HeaderMenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
//   menuItems = [ {...},{...},{...},{...} ]
// funciona de las dos maneras, sólo que en la que quedó en el código
// es más clara. Ya que le decimos a Angular que vamos a usar ese modelo de objeto
// o esa interfaz. 
    {text: 'Páginas Gratis', route: '/landing'},
    {text: 'Características', route: '/features'},
    {text: 'Servicios', route: '/services'},
    {text: 'Precios', route: '/pricing'},
    {text: 'Contacto', route: '/contact'}
  ]
}
