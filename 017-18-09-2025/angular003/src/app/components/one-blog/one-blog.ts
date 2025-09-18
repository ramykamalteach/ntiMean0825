import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-blog',
  imports: [],
  templateUrl: './one-blog.html',
  styleUrl: './one-blog.css'
})
export class OneBlog {
  @Input() blogCardData! : any;
}
