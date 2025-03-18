import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-featured-blogs',
  standalone: true,
  imports: [],
  templateUrl: './featured-blogs.component.html',
  styleUrl: './featured-blogs.component.css'
})
export class FeaturedBlogsComponent {
  featuredBlogs: any;
  
  constructor( private router: Router, private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.homeService.getFeaturedBlogs().subscribe({
      next: (data) => {
        this.featuredBlogs = data;
        console.log("Featured Blogs:", this.featuredBlogs);
      },
      error: (err) => {
        this.router.navigate(['']);
        console.log("Error fetching featured blogs", err);
      }
    })
  }

  goToBlogs(): void {
    this.router.navigate(['/blogs']);
  }

}
