import { NgModule } from '@angular/core';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./root.component').then((mod) => mod.RootComponent),
  },
];
