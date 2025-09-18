import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Blogs } from "./components/blogs/blogs";

@Component({
  selector: 'app-root',
  imports: [Blogs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular003');
}
