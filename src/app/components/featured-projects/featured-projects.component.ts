import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css'
})
export class FeaturedProjectsComponent {
  featuredProjects: any;

  constructor( private router: Router, private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.homeService.getFeaturedProjects().subscribe({
      next: (data) => {
        this.featuredProjects = data;
        console.log("Featured Projects:", this.featuredProjects);
      },
      error: (err) => {
        console.error("Error fetching featured projects data", err);
      }
    })
  }


  goToProjects(): void {
    this.router.navigate(['/projects']);
  }

}
