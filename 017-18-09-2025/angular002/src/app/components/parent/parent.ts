import { Component } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  parentData: string = "This is Parent Data sep-2025";

  childMessage :string = '';

  receiveMessage(msg: string) {
    this.childMessage = msg;
  }
}
