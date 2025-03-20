import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogsServiceService } from '../../services/blogsService/blogs-service.service';

@Component({
  selector: 'app-featured-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-blogs.component.html',
  styleUrl: './featured-blogs.component.css'
})
export class FeaturedBlogsComponent {
  blogs: any;
  
  constructor( private router: Router, private blogsService: BlogsServiceService) {}

  /**
   *  This function runs when the blogs component loads and will send a 
   *  request to get the blogs data before setting the data that is returned to
   *  'blogs'. 
   */
  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
        console.log("Blogs:", this.blogs);
      },
      error: (err) => {
        console.log("Error fetching featured blogs", err);
      }
    });
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

/**
 * This is used to navigate to the blogs page
 * for now this is commented out because it might be 
 * cut from the site. 
 * 
  goToBlogs(): void {
    this.router.navigate(['/blogs']);
  }
*/

}
