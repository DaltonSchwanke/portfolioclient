import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() slug: string | null = null;
  @Output() returnToProjects = new EventEmitter<void>();

  project: any;
  errorMessage: string = '';

  constructor(private projectsService: ProjectsServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.slug) {
      this.projectsService.getProjectBySlug(this.slug).subscribe({
        next: (data) => {
          this.project = data.data?.[0]; 
        },
        error: (err) => {
          console.error('Error fetching project', err);
        }
      });
    }
  }

  backToProjects(): void {
    this.returnToProjects.emit();
  }
}
