import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/root/menu.models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  menuList: Menu[];
  constructor() {
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
      new Menu(
        1,
        'Menu2',
        '/dashboards',
        '',
        'uil-files-landscapes',
        '',
        false,
        0,
        ''
      ),
      new Menu(2, 'Menu3', '/dashboards', '', 'uil-chart', '', false, 0, ''),
    ];
  }

  toogleSidebar() {
    const sidebar = document.getElementById('sidebar');
    (<HTMLElement>sidebar).classList.toggle('close');
  }

  ngOnInit() {}
}
