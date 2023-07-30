import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/services/auth.guard';
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [CommonModule, RouterModule, HttpClientModule, SharedModule],
  declarations: [],
  providers: [AuthService, AuthGuard],
})
export class RootModule {}
