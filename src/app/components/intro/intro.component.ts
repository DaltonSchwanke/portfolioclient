import { Component } from '@angular/core';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  introData: any;

  constructor( private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.homeService.getIntro().subscribe({
      next: (data) => {
        this.introData = data;
        console.log("Intro Data:", this.introData);
      },
      error: (err) => {
        console.error("Error fetching intro data:", err);
      }
    });
  }

}
