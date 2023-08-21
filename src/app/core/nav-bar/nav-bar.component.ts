import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Link {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  activeLink = 'Home';

  links = [
    { name: 'Home', path: '', icon: 'home' },
    { name: 'Products', path: 'products', icon: 'list' },
    { name: 'Cart', path: 'cart', icon: 'shopping_cart' }
  ];

  constructor(private router: Router) { }

  navigateTo(link: Link): void {
    this.activeLink = link.name;
    this.router.navigate([link.path]);
  }
}
