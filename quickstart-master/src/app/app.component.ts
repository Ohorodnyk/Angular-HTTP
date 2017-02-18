import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <http-test></http-test>
  `,
})
export class AppComponent  { name = 'Angular HTTP'; }
