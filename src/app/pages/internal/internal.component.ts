import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-internal',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './internal.component.html',
  styleUrl: './internal.component.scss',
})
export class InternalComponent {}
