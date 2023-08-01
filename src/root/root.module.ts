import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/services/auth.guard';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { AppSettings } from './root.settings';

@NgModule({
  exports: [CommonModule, RouterModule, HttpClientModule, MaterialModule],
  declarations: [],
  providers: [AuthService, AuthGuard, AppSettings],
})
export class RootModule {}
