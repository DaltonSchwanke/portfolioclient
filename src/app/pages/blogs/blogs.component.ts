import { Component } from '@angular/core';
import { BlogsServiceService } from '../../services/blogsService/blogs-service.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: any;

  constructor( private blogsService: BlogsServiceService) {}

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
        console.log("Blogs:", this.blogs);
      },
      error: (err) => {
        console.error("Error fetching blogs", err);
      }
    })
  }

}
