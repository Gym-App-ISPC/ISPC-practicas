import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface PeriodicElement {
  HORARIOS: string;
  LUNES: string;
  MARTES: string;
  MIERCOLES: string;
  JUEVES: string;
  VIERNES: string;
}

const ELEMENT_DATA = [
  {
    position: 1,
    HORARIOS: '10:00',
    LUNES: 'Crossfit',
    MARTES: 'Glúteos',
    MIERCOLES: 'Abdomen',
    JUEVES: 'Yoga',
    VIERNES: 'Musculación',
  },
  {
    position: 2,
    HORARIOS: '11:00',
    LUNES: 'Funcional',
    MARTES: 'Aeróbico',
    MIERCOLES: 'Pilates',
    JUEVES: 'Xcore',
    VIERNES: 'Streching',
  },
  {
    position: 3,
    HORARIOS: '12:00',
    LUNES: 'Cardio',
    MARTES: 'Box',
    MIERCOLES: 'GAP',
    JUEVES: 'BodyPump',
    VIERNES: 'Step',
  },
  {
    position: 4,
    HORARIOS: '16:00',
    LUNES: 'Fit Combat',
    MARTES: 'BodyBalance',
    MIERCOLES: 'Musculación',
    JUEVES: 'Crossfit',
    VIERNES: 'TRX',
  },
  {
    position: 5,
    HORARIOS: '17:00',
    LUNES: 'Zumba',
    MARTES: 'Spinning',
    MIERCOLES: 'Glúteos',
    JUEVES: 'CardioBox',
    VIERNES: 'Pilates',
  },
  {
    position: 6,
    HORARIOS: '18:00',
    LUNES: 'UBound',
    MARTES: 'CircuitTraining',
    MIERCOLES: 'Crossfit',
    JUEVES: 'Abdomen',
    VIERNES: 'BodyAttack',
  },
  {
    position: 7,
    HORARIOS: '19:00',
    LUNES: 'CardioHiit',
    MARTES: 'Glúteos',
    MIERCOLES: 'Yoga',
    JUEVES: 'Spinning',
    VIERNES: 'Zumba',
  },
  {
    position: 8,
    HORARIOS: '20:00',
    LUNES: 'Xcore',
    MARTES: 'TRX',
    MIERCOLES: 'Musculación',
    JUEVES: 'Funcional',
    VIERNES: 'Aeróbico',
  },
];

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss'],
})
export class ClasesComponent {
  displayedColumns: string[] = [
    'HORARIOS',
    'LUNES',
    'MARTES',
    'MIERCOLES',
    'JUEVES',
    'VIERNES',
  ];
  dataSource = ELEMENT_DATA;
}
