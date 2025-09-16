import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C001 } from "./components/c001/c001";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, C001],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angluar001');
}
