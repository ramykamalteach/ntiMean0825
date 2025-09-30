import { Component } from '@angular/core';
import { Cart } from "../cart/cart";

@Component({
  selector: 'app-navbar',
  imports: [Cart],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
