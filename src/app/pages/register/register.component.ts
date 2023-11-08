import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalPageLayoutComponent } from '../../components/external-page-layout/external-page-layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ExternalPageLayoutComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
