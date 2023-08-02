import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RootModule } from './root.module';
import { trigger, state, style } from '@angular/animations';
import { Settings } from './root.settings.model';
import { AppSettings } from './root.settings';
import { Menu } from './menu.models';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [RootModule],
})
export class RootComponent implements OnInit {
  ngOnInit() {}
  title = '';
  menuList: any;
  log: boolean = false;

  constructor(private auth: AuthService) {
    this.log = this.auth.isLoggedIn();
    this.menuList = [
      new Menu(
        0,
        'Dashboard',
        '/dashboard',
        '',
        'uil-estate',
        '',
        false,
        0,
        ''
      ),
      new Menu(1, 'Menu2', '', '', 'uil-files-landscapes', '', false, 0, ''),
      new Menu(2, 'Menu3', '', '', 'uil-chart', '', false, 0, ''),
    ];
  }

  toogleSidebar() {
    const sidebar = document.getElementById('sidebar');
    (<HTMLElement>sidebar).classList.toggle('close');
  }
}
