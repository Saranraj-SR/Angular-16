import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: true,
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
    let closeBtn = document.getElementById('btn');
    let sidebar = document.getElementById('sidebar');
    console.log(closeBtn, sidebar);
    (<HTMLElement>sidebar).classList.toggle('open');
    if ((<HTMLElement>sidebar).classList.contains('open')) {
      (<HTMLElement>closeBtn).classList.replace('bx-menu', 'bx-menu-alt-right'); //replacing the iocns class
    } else {
      (<HTMLElement>closeBtn).classList.replace('bx-menu-alt-right', 'bx-menu'); //replacing the iocns class
    }
  }

  ngOnInit() {}
}
