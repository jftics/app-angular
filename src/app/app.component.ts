import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { UtilesService } from './servicios/utiles.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-material';

  constructor(private _snackBar: MatSnackBar, private _utiles:UtilesService){
    this._utiles.changeEmittedSnack$.subscribe(txt=>{
      this.showSnackBar(txt);
    });
    this._utiles.changeEmittedSnackError$.subscribe(txt=>{
      this.showSnackBarError(txt);
    });
  }
  showSnackBar(msg:string){
    this._snackBar.open(msg,"X",{ horizontalPosition:"right", panelClass:'snackbar-success'});
  };
  showSnackBarError(msg:string){
    this._snackBar.open("Error: " + msg,"X",{duration:6000, horizontalPosition:"right", panelClass:'snackbar-error'});
  };

}
