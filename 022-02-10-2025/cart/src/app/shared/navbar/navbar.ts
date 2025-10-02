import { Component } from '@angular/core';
import { Cart } from "../cart/cart";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Cart],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
