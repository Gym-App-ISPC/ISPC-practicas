import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [AuthService, LoginService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a valid login form', () => {
    expect(component.login).toBeDefined(); // check if form is created correctly
    expect(component.login instanceof FormGroup).toBeTruthy(); // check if form is an instance of formgroup
    expect(component.login.get('fname')).toBeDefined(); // check if contain email input
    expect(component.login.get('password')).toBeDefined(); // check if contain password input
  });

  it('should mark the email and password fields as invalid when they are empty', () => {
    const emailField = component.login.get('fname');
    const passwordField = component.login.get('password');

    expect(emailField?.invalid).toBeTruthy();
    expect(passwordField?.invalid).toBeTruthy();
  });

  it('should mark the email and password fields as valid when is provided data to each field', () => {
    const emailField = component.login.get('fname');
    const passwordField = component.login.get('password');

    emailField?.setValue('beth@gmail.com');
    passwordField?.setValue('avb%U6Y%vV#tj8');

    expect(emailField?.valid).toBeTruthy();
    expect(passwordField?.valid).toBeTruthy();
  });

  it('should call the logindata method when the form is submitted with valid data', () => {
    spyOn(component, 'logindata');

    const emailField = component.login.get('fname');
    const passwordField = component.login.get('password');

    emailField?.setValue('beth@gmail.com');
    passwordField?.setValue('avb%U6Y%vV#tj8');

    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.logindata).toHaveBeenCalled();
  });
});
