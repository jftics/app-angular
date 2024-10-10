import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilesService } from '../../servicios/utiles.service';

@Component({
  selector: 'app-form5',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './form5.component.html',
  styleUrl: './form5.component.scss'
})
export class Form5Component {

  constructor(private _snackBar:MatSnackBar, private _utiles:UtilesService){

  }

  openSnackBar(){
    let snackBarRef = this._snackBar.open("texto de prueba", "Cerrar");
    snackBarRef.onAction().subscribe(()=>{
      console.log("Se llamo a la accion del snack bar");
    });
  }
  openSnackBarGlobal(){
    this._utiles.emitSnack("mensaje desde el componente hijo");
  }
  openSnackBarGlobalError(){
    this._utiles.emitSnackError("mensaje desde el componente hijo con error");
  }

}
