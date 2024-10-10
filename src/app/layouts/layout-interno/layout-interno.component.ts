import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-layout-interno',
  standalone: true,
  imports: [HeaderComponent,MatSidenavModule , RouterOutlet, MatIconModule ,MatButtonModule, MatToolbarModule, MatExpansionModule, MatListModule, RouterLink ],
  templateUrl: './layout-interno.component.html',
  styleUrl: './layout-interno.component.scss'
})
export class LayoutInternoComponent {

}
