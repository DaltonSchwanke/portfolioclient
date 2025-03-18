import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationData: any;

  constructor( private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.homeService.getEducation().subscribe({
      next: (data) => {
        this.educationData = data;
        console.log("Education Data:", this.educationData);
      },
      error: (err) => {
        console.error("Error fetching education data:", err);
      }
    });
  }

}
