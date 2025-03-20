import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  
  educationData: any = { data: []};

  constructor( private homeService: HomeServiceService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.homeService.getEducation().subscribe({
      next: (data) => {
        this.educationData = data;
        this.formatDates();
        console.log("Education Data:", this.educationData);
      },
      error: (err) => {
        console.error("Error fetching education data:", err);
      }
    });
  }

  formatDates(): void {
    this.educationData.data.forEach((edu: any) => {
      edu.startDate = this.datePipe.transform(edu.startDate, 'MMMM, yyyy'); 
      edu.endDate = this.datePipe.transform(edu.endDate, 'MMMM, yyyy'); 
    });
  }
}
