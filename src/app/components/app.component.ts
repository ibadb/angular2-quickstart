import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>{{heading}}</h1>
  <!--<img [src]="countries" />-->

  <br/>
  <div class="countries">
    <a [routerLink]="['/countries']" style="font-family: sans-serif;">Countries</a>
  </div>
  
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent  { 
  heading = 'This world is Awesome!';
  countries = './assets/images/countries.png';
}
