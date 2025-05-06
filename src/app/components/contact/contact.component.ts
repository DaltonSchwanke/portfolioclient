import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData: any;

  constructor( private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.homeService.getContact().subscribe({
      next: (data) => {
        this.contactData = data;
        console.log("Contact Data:", this.contactData);
      },
      error: (err) => {
        console.error("Error fetching contact data", err);
      }

    });
  }

}
