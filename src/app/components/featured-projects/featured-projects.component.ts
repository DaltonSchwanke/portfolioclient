import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsServiceService } from '../../services/projectsService/projects-service.service';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css'
})
export class FeaturedProjectsComponent {
  projects: any;

  constructor( private router: Router, private projectsService: ProjectsServiceService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe({
      next: (data) => {
        if(data.data.length > 3){
          this.projects = data.data.slice(0,3);
        }
        else{
          this.projects = data.data;
        }
      },
      error: (err) => {
        console.error("Error fetching projects data", err);
      }
    })
  }

   /**
   *  This function is used to route the user to the project page
   *  pertaining to the project slug that is passed as a parameter.
   * 
   * @param slug project slug id
   */
   goToProject(slug: string): void{
    this.router.navigate(['/project', slug]);
  }




  /**
   *  this method is currently commented out because the route to this page
   *  is turned off due to reconstruction. 
   *
   *   
   */
  goToProjects(): void {
    this.router.navigate(['/projects']);
  }

}
