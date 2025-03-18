import { Component } from '@angular/core';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experienceData: any;

  constructor( private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.homeService.getExperience().subscribe({
      next: (data) => {
        this.experienceData = data;
        console.log("Experience Data:", this.experienceData);
      },
      error: (err) => {
        console.error("Error fetching experience data:", err);
      }
    });
  }

}
