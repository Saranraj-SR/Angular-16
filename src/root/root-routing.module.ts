import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { AuthenticationComponent } from './page/authentication/authentication.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/services/auth.guard';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./page/page.component').then((mod) => mod.PageComponent),
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: 'Dashboard' },
      },
    ],
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
