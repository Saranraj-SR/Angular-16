import { Component, HostListener, OnInit } from '@angular/core';
import { RootModule } from './root.module';

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

  constructor() {}
}
