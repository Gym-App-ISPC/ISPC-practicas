import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanComponent } from './crear-plan.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('CrearPlanComponent', () => {
  let component: CrearPlanComponent;
  let fixture: ComponentFixture<CrearPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearPlanComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a valid plan form', () => {
    expect(component.planForm).toBeDefined();
    expect(component.planForm instanceof FormGroup).toBeTruthy();

    expect(component.planForm.get('nombre')).toBeDefined();
    expect(component.planForm.get('descripcion')).toBeDefined();
    expect(component.planForm.get('cantidad_clases')).toBeDefined();
    expect(component.planForm.get('precio')).toBeDefined();
  });

  it('should mark the nombre field as invalid when the field is empty', () => {
    const nombreField = component.planForm.get('nombre');

    expect(nombreField?.invalid).toBeTruthy();
  });

  it('should mark the nombre field as valid when the field is not empty', () => {
    const nombreField = component.planForm.get('nombre');

    nombreField?.setValue('Premium');

    expect(nombreField?.valid).toBeTruthy();
  });

  it('should mark the cantidad_clases field as invalid when the field is empty', () => {
    const cantidadField = component.planForm.get('cantidad_clases');

    expect(cantidadField?.invalid).toBeTruthy();
  });

  it('should mark the cantidad_clases field as valid when the field is not empty', () => {
    const cantidadField = component.planForm.get('cantidad_clases');

    cantidadField?.setValue(5);

    expect(cantidadField?.valid).toBeTruthy();
  });

  it('should mark the precio field as invalid when the field is empty', () => {
    const precioField = component.planForm.get('precio');

    expect(precioField?.invalid).toBeTruthy();
  });

  it('should mark the precio field as valid when the field is not empty', () => {
    const precioField = component.planForm.get('precio');

    precioField?.setValue(12600);

    expect(precioField?.valid).toBeTruthy();
  });

  it('should call the crearPlan method when the form is submitted with valid data', () => {
    spyOn(component, 'crearPlan');

    const nombreField = component.planForm.get('nombre');
    const descripcionField = component.planForm.get('descripcion');
    const cantidadField = component.planForm.get('cantidad_clases');
    const precioField = component.planForm.get('precio');

    nombreField?.setValue('Premium');
    descripcionField?.setValue('Lorem ipsum');
    cantidadField?.setValue(5);
    precioField?.setValue(12600);

    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.crearPlan).toHaveBeenCalled();
  });
});
