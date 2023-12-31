import { Injectable } from '@angular/core';
import { Settings } from './root.settings.model';

@Injectable()
export class AppSettings {
  public settings = new Settings(
    'Header', //theme name
    true, //loadingSpinner
    true, //fixedHeader
    true, //sidenavIsOpened
    true, //sidenavIsPinned
    false, //sidenavUserBlock
    'vertical', //horizontal , vertical
    'default', //default, compact, mini
    'blue-dark', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
    false // true = rtl, false = ltr
  );
}
