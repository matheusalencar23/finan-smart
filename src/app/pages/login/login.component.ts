import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalPageLayoutComponent } from '../../components/external-page-layout/external-page-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ExternalPageLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
