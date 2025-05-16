import { Component } from '@angular/core';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarData: any;
  sidebarImage: any;

  constructor( private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.homeService.getSideBar().subscribe({
      next: (data) => {
        this.sidebarData = data;
        console.log("Sidebar Data:", this.sidebarData);
      },
      error: (err) => {
        console.error("Error fetching sidebar data", err);
      }
    })
    this.homeService.getSidebarImage().subscribe({
      next: (data) => {
        this.sidebarImage = data?.data?.image;
        console.log("Sidebar Image: ", this.sidebarImage);
      },
      error: (err) => {
        console.error("Error fetching sidebar Image", err);
      }
    })
  }

  openResume(event: Event): void {
    event.preventDefault();
    console.log("function ran");
    const resumeUrl = this.sidebarData?.data?.resume[0]?.url;
    if (resumeUrl) {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    }
  }

  getUserImage(sidebarData: any): string {
    if(!sidebarData?.data?.image?.url){
      sidebarData.data.image.url = "/user.png";
    }
    return sidebarData?.data?.image?.url;
  }

}
