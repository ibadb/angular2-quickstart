import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <h1>{{heading}}</h1>
  <img [src]="countries" />
  `,
})
export class AppComponent  { 
  heading = 'This world is Awesome!';
  countries = './assets/images/countries.png';
}
