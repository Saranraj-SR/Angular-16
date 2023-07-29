import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [AuthService],
})
export class RootModule {}
