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

  constructor( private projectsService: ProjectsServiceService) {
    this.projectsService.getProjects();
  }

}
