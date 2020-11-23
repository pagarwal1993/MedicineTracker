import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <h2>
      404 - Page not found
    </h2>
    <p *ngIf="path">You might want to go to the <a [routerLink]="path">"{{ path }}" page</a></p>
  `
})
export class NotFoundComponent  {
  constructor() { }
}
