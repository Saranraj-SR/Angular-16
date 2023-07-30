import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';
import { CommonModule } from '@angular/common';
import { RootModule } from './root.module';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [RootModule],
  // providers: [AuthService, HttpClientModule],
})
export class RootComponent implements OnInit {
  ngOnInit() {}

  constructor(private router: Router) {}
  title = 'angular_latest';
}
