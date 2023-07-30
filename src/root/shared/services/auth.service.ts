import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  isLoggedIn() {
    return (
      localStorage.getItem('isLoggedIn') != undefined &&
      localStorage.getItem('isLoggedIn') == 'true'
    );
  }
}
