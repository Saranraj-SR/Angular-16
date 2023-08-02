import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RootModule } from './root.module';
import { trigger, state, style } from '@angular/animations';
import { Settings } from './root.settings.model';
import { AppSettings } from './root.settings';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [RootModule],
  // animations: [
  //   trigger('sidebar', [
  //     state(
  //       'true',
  //       style({
  //         width: '250px',
  //       })
  //     ),
  //     state(
  //       'false',
  //       style({
  //         width: '0',
  //       })
  //     ),
  //   ]),
  //   trigger('content', [
  //     state(
  //       'true',
  //       style({
  //         width: 'calc(100% - 250px)',
  //       })
  //     ),
  //     state(
  //       'false',
  //       style({
  //         width: '100%',
  //       })
  //     ),
  //   ]),
  // ],
})
export class RootComponent implements OnInit {
  ngOnInit() {}
  title = '';
}
