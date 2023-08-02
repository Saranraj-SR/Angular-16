import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.models';
import { RootModule } from '../root.module';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  standalone: true,
  imports: [RootModule],
})
export class PageComponent implements OnInit {
  menuList: any;
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

  ngOnInit() {}

  toogleSidebar() {
    const sidebar = document.getElementById('sidebar');
    (<HTMLElement>sidebar).classList.toggle('close');
  }
}
