import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Parent } from './components/parent/parent';


@Component({
  selector: 'app-root',
  imports: [FormsModule, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular002');

  userName: string = "Omar Wael";

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.userName = inputElement.value;
  }
}
