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
  }

}
