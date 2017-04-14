import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <h1>{{heading}}</h1>
  <!--<img [src]="countries" />-->

  <br/>
  <a [routerLink]="['/countries']">Show me the countries</a>
  <router-outlet></router-outlet>
  
  `,
})
export class AppComponent  { 
  heading = 'This world is Awesome!';
  countries = './assets/images/countries.png';
}
