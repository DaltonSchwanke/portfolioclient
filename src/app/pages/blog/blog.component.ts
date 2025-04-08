import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogsServiceService } from '../../services/blogsService/blogs-service.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  blog: any;
  errorMessage: string = '';

  constructor(private blogService: BlogsServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const blogSlug: string | null = this.route.snapshot.paramMap.get('slug');
    
    if (blogSlug) {
      this.blogService.getBlogBySlug(blogSlug).subscribe({
        next: (data) => {
          if (data.data && data.data.length > 0) {
            this.blog = data.data[0];
          } else {
            this.errorMessage = "Blog not found.";
          }
          console.log("Blog Details:", this.blog);
        },
        error: (err) => {
          console.error("Error fetching blog details", err);
          this.errorMessage = "Oops, there was an error fetching the blog.";
        }
      });
    } else {
      this.errorMessage = "Oops, looks like there was an error getting this blog's information.";
    }
}


}
