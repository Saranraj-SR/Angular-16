import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';
import { AuthService } from './shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RootModule } from './root.module';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [SharedModule, RouterModule, CommonModule],
  // providers: [AuthService, HttpClientModule],
})
export class RootComponent implements OnInit {
  ngOnInit() {}

  constructor(public auth: AuthService, private router: Router) {
    console.log(this.auth.loggedIn, 'value');
    console.log(this.auth.loggedIn(), 'signal');
  }
  title = 'angular_latest';

  log = false;
  mobileQuery: any = MediaQueryList;
  menu: any = [
    {
      displayName: 'Dashboard',
      iconName: 'person',
      route: '',
    },
    {
      displayName: 'Add / Edit Record',
      iconName: 'person_add',
      route: 'add',
    },
    {
      displayName: 'View Record',
      iconName: 'description',
      route: 'view',
    },
  ];
  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['auth']);
  }
}
