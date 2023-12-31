import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootModule } from '../root.module';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  standalone: true,
  imports: [RootModule],
  // encapsulation: ViewEncapsulation.None,
})
export class PageComponent implements OnInit {
  constructor() {}

  toggleNotification() {
    let navBar = document.getElementById('notificationContainer');
    (<HTMLElement>navBar).classList.toggle('showNotification');
  }

  ngOnInit() {}
}
