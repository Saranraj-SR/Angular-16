import { Injectable, computed, signal } from '@angular/core';
// import { IBreadCrumb } from '../components/breadcrumb/breadcrumb.interface';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
interface Details {
  name: string;
  id: number;
  company: string;
  dob: object;
  gender: string;
}
@Injectable()
export class AuthService {
  public apiCall = toSignal(
    this.http.get('https://jsonplaceholder.typicode.com/posts')
  );
  public response = toObservable(this.apiCall);
  public addedItem = signal<Details[]>([]);
  public totalItems = computed(() => this.addedItem().length);
  public editableRow = signal<Details[]>([]);
  public loggedIn = signal(false);
  // public updateBreadCrub = signal<IBreadCrumb[]>([]);
  constructor(private http: HttpClient) {
    // console.log(this.apiCall(), 'efapoL')
  }

  // updateBreadCrumbData(value: IBreadCrumb) {
  //   this.updateBreadCrub.mutate((val) => {
  //     val.push(value);
  //   });
  // }

  isLoggedIn() {
    this.loggedIn = signal(
      localStorage.getItem('isLoggedIn') != undefined &&
        localStorage.getItem('isLoggedIn') == 'true'
    );
    return this.loggedIn();
  }

  addItem(value: Details) {
    this.addedItem.mutate((val) => {
      val.push({
        ...value,
        id:
          this.totalItems() != 0
            ? this.addedItem()[this.totalItems() - 1].id + 1
            : 0,
      });
    });

    let data = console.log('ADDITEMS', this.addedItem());
  }

  patchEditableRow(value: Details) {
    this.editableRow.set([]);
    this.editableRow.mutate((val) => {
      val.push(value);
    });
    console.log('EDITITEMS', this.addedItem());
  }

  editItem(value: Details) {
    console.log(value, 'vaaldaaa');
    this.addedItem.mutate((val) => {
      console.log(val, 'idddd');
      val.forEach((item, index) => {
        if (item.id == value.id) {
          val[index] = value;
          console.log(val, value, 'daasdadasdasdsadsad');
        }
      });
      // val.push(value);
    });
    console.log('ADDITEMS', this.addedItem());
  }

  removeItem(id: number) {
    console.log('222');
    this.addedItem.mutate((val) => {
      val.splice(id, 1);
    });
    console.log('REITEMS', this.addedItem());
  }
}
