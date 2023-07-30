import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthGuard } from './shared/services/auth.guard';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./root.component').then((mod) => mod.RootComponent),
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Home' },
    // providers: [AuthGuard],
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
  },
];
