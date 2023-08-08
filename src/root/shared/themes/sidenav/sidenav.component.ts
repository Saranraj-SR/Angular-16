import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Menu } from './menu.models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
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
    let homeSection = document.getElementById('home-content');
    console.log(closeBtn, sidebar);
    (<HTMLElement>sidebar).classList.toggle('open');
    if ((<HTMLElement>sidebar).classList.contains('open')) {
      (<HTMLElement>closeBtn).classList.replace('bx-menu', 'bx-menu-alt-right'); //replacing the iocns class
      (<HTMLElement>homeSection).style.width = 'calc(100% - 250px)';
      (<HTMLElement>homeSection).style.left = '250px';
    } else {
      (<HTMLElement>closeBtn).classList.replace('bx-menu-alt-right', 'bx-menu'); //replacing the iocns class
      (<HTMLElement>homeSection).style.width = 'calc(100% - 70px)';
      (<HTMLElement>homeSection).style.left = '70px';
    }
  }

  ngOnInit() {}
}
