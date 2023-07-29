import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { provideRouter } from '@angular/router';
import { RootModule } from './root/root.module';
import { routes } from './root/root-routing.module';

bootstrapApplication(
  RootComponent,

  {
    providers: [
      // {provide: BACKEND_URL, useValue: 'https://photoapp.looknongmodules.com/api'},
      provideRouter(routes),
      importProvidersFrom(RootModule),
    ],
  }
);
