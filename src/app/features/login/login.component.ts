import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalPageLayoutComponent } from '../../layout/external-page-layout/external-page-layout.component';
import { InputComponent } from '../../shared/components/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ExternalPageLayoutComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
