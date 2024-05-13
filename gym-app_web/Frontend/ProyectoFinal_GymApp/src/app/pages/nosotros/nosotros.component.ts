import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {

  colorFondo: string = '#ffffff'; // color de fondo blanco
  colorTexto: string = '#000000'; //  color de texto negro
  colorSeccion: string = '#8e9092'; //color gris
  colorTextoBoton: string = '#ffffff';
  colorBotones: string = '#dc3545'; //  color del botón (rojo)
  tamanioBoton: string = '30px'; // Asigna el tamaño del botón
  radioBordesBoton: string = '5px'; // Asigna el radio de los bordes del botón
  tamanoImagen: string = '250px';
}

