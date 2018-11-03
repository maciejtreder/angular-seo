import { Component } from '@angular/core';

@Component({
   selector: 'app-menu',
   template: `
       <ul>
           <li><a routerLink="firstComponent">First component</a></li>
           <li><a routerLink="secondComponent">Second component</a></li>
       </ul>
   `,
   styles: [`
       :host {margin: 0; padding: 0}
       ul {list-style-type: none; padding: 0;}
       li {display: inline-block;}
       a {
           border: 1px solid #666666;
           background: #aaaaaa; border-radius: 5px;
           box-shadow: 1px 1px 5px black;
           color: white;
           font-weight: bold;
           padding: 5px;
           text-decoration: none;
        }
       li + li a {margin-left: 20px;}
   `]
})
export class MenuComponent {
}

