import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() blogSelected = new EventEmitter<any>();
  blogs: any;

  constructor( private blogsService: BlogsServiceService, private router: Router) {}

  /**
   *  This function is ran when the blogs component loads and will get blog
   *  data and when the data is returned it will set it to the variable 'blogs' and then 
   *  sort the blogs from latest to earliest. 
   */
  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
        if (this.blogs?.data) {
          this.blogs.data.sort((a: any, b: any) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
        }
        console.log("Blogs:", this.blogs);

      },
      error: (err) => {
        console.error("Error fetching blogs", err);
      }
    })
  }

  /**
   *  This function takes in the date for a blog in the format that the cms
   *  stores it as and then it will return the date as "Month Day, Year"
   * 
   * @param dateStr Date format from CMS
   * @returns 
   */
  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }


  /**
   *  This function is used to navigate the user to the blog page pertaining
   *  to the blog slug passed as a parameter. 
   * 
   * @param slug blog slug id
   */
  goToBlog(slug: string): void {
    this.blogSelected.emit(slug);
  }


  

}
