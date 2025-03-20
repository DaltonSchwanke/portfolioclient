import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import { BlogsServiceService } from '../../services/blogsService/blogs-service.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: any;

  constructor( private blogsService: BlogsServiceService, private router: Router) {}

  /**
   *  This function is ran when the blogs component loads and will get blog
   *  data and when the data is returned it will set it to the variable 'blogs'.
   */
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


  /**
   *  This function is used to navigate the user to the blog page pertaining
   *  to the blog slug passed as a parameter. 
   * 
   * @param slug blog slug id
   */
  goToBlog(slug: string): void {
    console.log(slug);
    this.router.navigate(['/blog', slug]);
  }

}
