import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-external-page-layout',
    imports: [CommonModule],
    templateUrl: './external-page-layout.component.html',
    styleUrl: './external-page-layout.component.scss',
    host: {
        class: 'flex flex-row',
    }
})
export class ExternalPageLayoutComponent {}
