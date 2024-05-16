import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EMPTY, forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  planes: any = [];
  clases: any = [];
  clientes: any = [];
  mensajes: any[] = [];

  currentTab: number = 0;

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        tap(() => {
          this.loadData().subscribe();
        })
      )
      .subscribe();
  }

  loadData() {
    return forkJoin([
      this.apiService.getData('planes'),
      this.apiService.getData('clases'),
      this.apiService.getData('clientes'),
      this.http.get<any[]>('http://localhost:8000/api/mostrar-mensajes/'),
    ]).pipe(
      tap(
        ([
          planesResponse,
          clasesResponse,
          clientesResponse,
          mensajesResponse,
        ]) => {
          this.planes = planesResponse.planes;
          this.clases = clasesResponse.clases;
          this.clientes = clientesResponse.clientes;
          this.mensajes = mensajesResponse;
        }
      ),
      catchError((error) => {
        console.error('Error al cargar los datos:', error);
        return EMPTY; // Devuelve un observable vacío en caso de error
      })
    );
  }

  openTab(tabName: string) {
    this.currentTab = ['plans', 'subscriptions', 'clients'].indexOf(tabName);
  }

  verCliente(cliente: any): void {
    this.router.navigate(['/cliente', cliente.id], { state: { cliente } });
  }

  verPlan(plan: any): void {
    this.router.navigate(['/plan', plan.id], { state: { plan } });
  }

  verClase(clase: any): void {
    this.router.navigate(['/clase', clase.id], { state: { clase } });
  }

  verMensaje(mensaje: any): void {
    this.router.navigate(['/mensaje', mensaje.id], { state: { mensaje } });
  }
}
