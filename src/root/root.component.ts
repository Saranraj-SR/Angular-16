import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  ngOnInit() {
    const button: any = document.querySelector('button');
    console.log(button, 'eef');
    if (button != null) {
      button.addEventListener('click', () => {
        (<HTMLDivElement>(
          document.getElementById('customSidebar')
        )).classList.toggle('collapsedd');
      });
    }
  }
  title = 'angular_latest';

  constructor(private router: Router) {}
}
