import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

import { ReactiveFormsModule, FormBuilder,Validator, Validators } from '@angular/forms';


interface Profesion {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule, MatInputModule,MatButtonModule,MatRadioModule,MatCheckboxModule,MatSelectModule,   ReactiveFormsModule ],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.scss'
})
export class Form2Component {

  constructor(private formBuilder:FormBuilder){

  }

  personaForm = this.formBuilder.group({
    nombres:[''],
    apellidos:[''],
    email:['', [Validators.required, Validators.email]],
    genero:[''],
    profesion:[''],
    habilidades:this.formBuilder.group({
      liderazgo:[''],
      comunicacion:[''],
      empatia:['']
    })
  });

  lista: Profesion[] = [
    {value: '1', viewValue: 'Arquitecto'},
    {value: '2', viewValue: 'Ingeniero'},
    {value: '3', viewValue: 'Abogado'},
  ];

  guardar(){
    console.log(this.personaForm.value);
  }

}
