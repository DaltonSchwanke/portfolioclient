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

  constructor( private router: Router, private homeService: HomeServiceService) {
    this.homeService.getFeaturedProjects();
  }


  goToProjects(): void {
    this.router.navigate(['/projects']);
  }

}
