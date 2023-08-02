import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootModule } from '../../root.module';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  standalone: true,
  imports: [RootModule],
})
export class AuthenticationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigateByUrl('/');
  }
}
