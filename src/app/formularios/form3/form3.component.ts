import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import 'moment/locale/es';
import moment from 'moment';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [MatDatepickerModule,MatInputModule,MatFormFieldModule, MatButtonModule , ReactiveFormsModule ],
  //providers: [provideNativeDateAdapter()],
  providers:[{provide: MAT_DATE_LOCALE, useValue:'es-BO'},
    provideMomentDateAdapter()
  ],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.scss'
})
export class Form3Component {

  constructor(private formBuilder: FormBuilder){

  }

  d = new Date(2024,5,12);

  dpForm = this.formBuilder.group({
    fecha: [this.d]
  });

  guardar(){
    console.log(this.dpForm.controls.fecha.value);
    console.log(this.dpForm.controls.fecha.value?.toISOString().split('T')[0]);
    //console.log(this.dpForm.controls.fecha.value?.toLocaleDateString('es-BO',{year: 'numeric', month: '2-digit', day: '2-digit'}));
    //console.log(this.dpForm.controls.fecha.value?.toLocaleDateString('en-US',{year: 'numeric', month: '2-digit', day: '2-digit'}));
    console.log(moment(this.dpForm.controls.fecha.value).year());
  }

}
