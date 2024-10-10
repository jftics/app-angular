import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule, MatInputModule ],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.scss'
})
export class Form1Component {

}
