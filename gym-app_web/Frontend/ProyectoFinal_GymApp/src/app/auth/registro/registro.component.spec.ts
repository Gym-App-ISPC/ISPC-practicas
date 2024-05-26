import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a valid registration form', () => {
    expect(component.registroForm).toBeDefined();
    expect(component.registroForm instanceof FormGroup).toBeTruthy();

    expect(component.registroForm.get('nombre')).toBeDefined();
    expect(component.registroForm.get('apellido')).toBeDefined();
    expect(component.registroForm.get('dni')).toBeDefined();
    expect(component.registroForm.get('fecha_nacimiento')).toBeDefined();
    expect(component.registroForm.get('email')).toBeDefined();
    expect(component.registroForm.get('password')).toBeDefined();
  });

  it('should mark the nombre field as invalid when is empty', () => {
    const nombreField = component.registroForm.get('nombre');

    expect(nombreField?.invalid).toBeTruthy();
  });

  it('should mark the nombre field as valid when is provided data to the field', () => {
    const nombreField = component.registroForm.get('nombre');

    nombreField?.setValue('John');

    expect(nombreField?.valid).toBeTruthy();
  });

  it('should mark the apellido field as invalid when the field is empty', () => {
    const apellidoField = component.registroForm.get('apellido');

    expect(apellidoField?.invalid).toBeTruthy();
  });

  it('should mark the apellido field as valid when is provided data to the field', () => {
    const apellidoField = component.registroForm.get('apellido');

    apellidoField?.setValue('Smith');

    expect(apellidoField?.valid).toBeTruthy();
  });

  it('should mark the dni field as invalid when the field is empty', () => {
    const dniField = component.registroForm.get('dni');

    expect(dniField?.invalid).toBeTruthy();
  });

  it('should mark the dni field as valid when is provided data to the field', () => {
    const dniField = component.registroForm.get('dni');

    dniField?.setValue(12345678);

    expect(dniField?.valid).toBeTruthy();
  });

  it('should mark the fecha_nacimiento field as invalid when the field is empty', () => {
    const fechaField = component.registroForm.get('fecha_nacimiento');

    expect(fechaField?.invalid).toBeTruthy();
  });

  it('should mark the fecha_nacimiento field as valid when is provided data to the field', () => {
    const fechaField = component.registroForm.get('fecha_nacimiento');

    fechaField?.setValue('20/05/2024');

    expect(fechaField?.valid).toBeTruthy();
  });

  it('should mark the email field as invalid when the field is empty', () => {
    const emailField = component.registroForm.get('email');

    expect(emailField?.invalid).toBeTruthy();
  });

  it('should mark the email field as valid when the field is not empty', () => {
    const emailField = component.registroForm.get('email');

    emailField?.setValue('john@gmail.com');

    expect(emailField?.valid).toBeTruthy();
  });

  it('should mark the password field as invalid when the field is empty', () => {
    const passwordField = component.registroForm.get('password');

    expect(passwordField?.invalid).toBeTruthy();
  });

  it('should mark the password field as valid when the field is not empty', () => {
    const passwordField = component.registroForm.get('password');

    passwordField?.setValue('T!fxt5MLxNa#n#');

    expect(passwordField?.valid).toBeTruthy();
  });

  it('should call the registrarCliente method when the form is submitted with valid data', () => {
    spyOn(component, 'registrarCliente');

    const nombreField = component.registroForm.get('nombre');
    const apellidoField = component.registroForm.get('apellido');
    const dniField = component.registroForm.get('dni');
    const fechaField = component.registroForm.get('fecha_nacimiento');
    const emailField = component.registroForm.get('email');
    const passwordField = component.registroForm.get('password');

    nombreField?.setValue('John');
    apellidoField?.setValue('Smith');
    dniField?.setValue(12345678);
    fechaField?.setValue('20/05/2024');
    emailField?.setValue('john@gmail.com');
    passwordField?.setValue('T!fxt5MLxNa#n#');

    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.registrarCliente).toHaveBeenCalled();
  });
});
