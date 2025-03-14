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

  constructor( private router: Router, private homeService: HomeServiceService) {
    this.homeService.getFeaturedBlgos();
  }

  goToBlogs(): void {
    this.router.navigate(['/blogs']);
  }

}
