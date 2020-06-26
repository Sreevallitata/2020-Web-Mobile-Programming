import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background: darkorange; color: cornsilk}',
    'li a { color: cornsilk}',
    'ul.nav a:hover { color: blue' +
    ' }'
  ]
})
export class HeaderComponent {
  constructor() {}

}
