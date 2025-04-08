import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsServiceService } from '../../services/projectsService/projects-service.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  project: any;
  errorMessage: string = '';

  constructor(private projectsService: ProjectsServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const projectSlug: string | null = this.route.snapshot.paramMap.get('slug');
    if (projectSlug) {
      this.projectsService.getProjectBySlug(projectSlug).subscribe({
        next: (data) => {
          this.project = data.data[0];
          console.log("Project:", this.project);
        },
        error: (err) => {
          console.error("Error fetching project details", err);
        }
      });
    } else {
      this.errorMessage = "Oops looks like there was an error getting this project's information";
    }
  }

}
