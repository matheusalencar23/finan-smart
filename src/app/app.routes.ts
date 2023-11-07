import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routeTitle = (title: string) => `FinanSmart | ${title}`;

export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: routeTitle('Login') },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (c) => c.RegisterComponent
      ),
    title: routeTitle('Register'),
  },
  {
    path: 'internal',
    loadComponent: () =>
      import('./pages/internal/internal.component').then(
        (c) => c.InternalComponent
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/internal/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        title: routeTitle('Dashboard'),
      },
      {
        path: 'entries',
        loadComponent: () =>
          import('./pages/internal/entries/entries.component').then(
            (c) => c.EntriesComponent
          ),
        title: routeTitle('Entries'),
      },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
