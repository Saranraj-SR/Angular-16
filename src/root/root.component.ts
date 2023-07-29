import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
})
export class RootComponent implements OnInit {
  public auth = {
    loggedIn: function () {
      return true;
    },
  };
  ngOnInit() {}

  constructor(private router: Router) {
    // console.log(this.auth.loggedIn, 'value')
    // console.log(this.auth.loggedIn(), 'signal')
  }
  title = 'angular_latest';

  shouldRun = {
    loggedIn: true,
  };
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
