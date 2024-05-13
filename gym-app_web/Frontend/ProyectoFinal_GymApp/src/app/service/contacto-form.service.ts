import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface form {
  id: string;
  fecha: string;
  nombre: string;
  email: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactoFormService {
  private apiConsultas: string = "http://localhost:8000/api/almacenar-mensaje/";

  constructor(private http: HttpClient) { }

  realizarConsulta(nombre: string, email: string, mensaje: string): Observable<form> {
    const consulta: form = {
      id: Date.now().toString(),
      fecha: new Date().toISOString(),
      nombre: nombre,
      email: email,
      mensaje: mensaje
    };
    return this.http.post<form>(`${this.apiConsultas}`, consulta);
  }

}
