import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() slug: string | null = null;
  blog: any;
  errorMessage: string = '';
  @Output() returnToBlogs = new EventEmitter<void>();

  constructor(private blogService: BlogsServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.slug) {
      this.blogService.getBlogBySlug(this.slug).subscribe({
        next: (data) => {
          this.blog = data.data?.[0]; 
        },
        error: (err) => {
          console.error('Error fetching project', err);
        }
      });
    }
  }

  backToBlogs(): void {
    this.returnToBlogs.emit();
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


}
