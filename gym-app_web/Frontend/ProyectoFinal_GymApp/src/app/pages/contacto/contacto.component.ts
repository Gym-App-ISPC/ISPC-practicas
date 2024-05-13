import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactoFormService } from 'src/app/service/contacto-form.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  consultaForm: FormGroup;
  consultaEnviada: boolean = false;

  constructor(private fb: FormBuilder, private consultaService: ContactoFormService) {
    this.consultaForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['',Validators.required]
    });
    }

  ngOnInit(): void {
  }

  onConsulta(event: Event): void {
    event.preventDefault;
    if (this.consultaForm.valid){
      console.log("Llamar al servicio de Consulta");
      
      const nombre = this.consultaForm.get('nombre')!.value;
      const email = this.consultaForm.get('email')!.value;
      const mensaje = this.consultaForm.get('mensaje')!.value;

      this.consultaService.realizarConsulta(nombre, email, mensaje).subscribe(
        respuesta => {
          console.log(respuesta);
          this.consultaForm.reset();
          this.consultaEnviada = true;
        },
        error => {
          console.error(error);
        }
      );

    } else {
      this.consultaForm.markAllAsTouched();
    }
  }
}
