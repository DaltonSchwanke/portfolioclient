import { Component } from '@angular/core';
import { ProjectsServiceService } from '../../services/projectsService/projects-service.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: any;

  constructor( private projectsService: ProjectsServiceService) {}

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

}
