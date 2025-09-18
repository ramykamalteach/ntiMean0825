import { Component } from '@angular/core';
import { OneBlog } from "../one-blog/one-blog";
import { BlogService } from '../../services/blog/blog.service';
import { blogDataType } from '../../models/blog.model/blog.model-module';


@Component({
  selector: 'app-blogs',
  imports: [OneBlog],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class Blogs {
  blogData : blogDataType[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogData = this.blogService.getBlogs();
  }

}
