import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {}
  title = 'angular-routing-params';
  next() {
    let id = 1,
      obj = {
        name: 'kusums',
        id: '222',
      };
    this.router.navigate(['/child/' + id], { queryParams: obj }); //passing by id
    // this.router.navigateByUrl('/child/1', { state: obj }); //passing by state
  }
}
