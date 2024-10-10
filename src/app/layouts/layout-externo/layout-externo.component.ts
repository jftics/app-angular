import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-layout-externo',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, FooterComponent ],
  templateUrl: './layout-externo.component.html',
  styleUrl: './layout-externo.component.scss'
})
export class LayoutExternoComponent {

}
