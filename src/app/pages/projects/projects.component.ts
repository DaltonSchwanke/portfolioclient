import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectsServiceService } from '../../services/projectsService/projects-service.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Output() projectSelected = new EventEmitter<any>();
  projects: any;

  constructor( private projectsService: ProjectsServiceService, private router: Router) {}

  /**
   *  This function is ran when the projects component is loaded and will
   *  call the project service and get project data and return it and set it to the
   *  variable 'projectData'
   */
  ngOnInit(): void {
    this.projectsService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        console.log("Projects:", this.projects) ;
      },
      error: (err) => {
        console.error("Error fetching project data", err);
      }
    })
  }




  /**
   *  This function is used to route the user to the project page
   *  pertaining to the project slug that is passed as a parameter.
   * 
   * @param slug project slug id
   */
  goToProject(slug: string): void {
    this.projectSelected.emit(slug);
  }


  getProjectImage(project: any): string {
    if(!project?.image?.url){
      project.image.url = '/project.png';
    }
    return project?.image?.url
  }
}
