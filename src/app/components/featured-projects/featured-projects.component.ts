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
        this.projects = data;
        if(this.projects?.data){
          this.projects.data.sort((a: any, b: any) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          })
        }
        if(this.projects.data.length > 3){
          this.projects.data = this.projects.data.slice(0,3);
        } else{
          this.projects.data = this.projects.data;
        }
        console.log("Featured Projects: ", this.projects);
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

  /**
   * Returns the first image URL of the project if available, otherwise returns a fallback path.
   * @param project project object
   * @returns image URL string
   */
  getProjectImage(project: any): string {
    if(project?.image == null){
      return '/projectImage.jpg';
    } else {
      return project?.image[0]?.url;
    }
  }

}
