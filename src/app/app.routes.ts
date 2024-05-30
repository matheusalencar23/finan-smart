import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

const routeTitle = (title: string) => `FinanSmart | ${title}`;

export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: routeTitle('Login') },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register.component').then(
        (c) => c.RegisterComponent
      ),
    title: routeTitle('Register'),
  },
  {
    path: 'internal',
    loadComponent: () =>
      import('./features/internal/internal.component').then(
        (c) => c.InternalComponent
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/internal/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        title: routeTitle('Dashboard'),
      },
      {
        path: 'entries',
        loadComponent: () =>
          import('./features/internal/entries/entries.component').then(
            (c) => c.EntriesComponent
          ),
        title: routeTitle('Entries'),
      },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
