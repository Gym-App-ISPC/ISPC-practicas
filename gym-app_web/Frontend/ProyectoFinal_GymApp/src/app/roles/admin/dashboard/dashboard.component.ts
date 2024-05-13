import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  planes: any = [
    { id: 1, nombre: 'Plan A' },
    { id: 2, nombre: 'Plan B' },
    { id: 3, nombre: 'Plan C' }
  ];
  clases: any = [
    { id: 1, nombre: 'Clase de Yoga' },
    { id: 2, nombre: 'Clase de Pilates' },
    { id: 3, nombre: 'Clase de Zumba' }
  ];
  clientes: any = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', plan: { id: 1, nombre: 'Plan A' } },
    { id: 2, nombre: 'María', apellido: 'García', plan: { id: 2, nombre: 'Plan B' } },
    { id: 3, nombre: 'Pedro', apellido: 'Martínez', plan: null }
  ];
  isAdmin: boolean = false;
  currentTab: number = 0;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  openTab(tabName: string) {
    this.currentTab = ['planes', 'clases', 'clientes'].indexOf(tabName);
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
}
