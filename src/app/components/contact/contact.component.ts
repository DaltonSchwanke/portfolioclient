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


  submitEmail(){
    event?.preventDefault();

    var emailElement = document?.getElementById("contactEmail") as HTMLInputElement;
    var email = emailElement?.value;
    var titleElement = document?.getElementById("contactTitle") as HTMLInputElement;
    var title = titleElement?.value;
    var messageElement = document?.getElementById("contactMessage") as HTMLInputElement;
    var message = messageElement?.value;

    if(!this.isValidEmail(email)){
      console.log('NEED EMAIL');
      return;
    } else if(title == ''){ // need to see why this doesn't work 
      console.log('NEED Title');
      return;
    } else if(message == ''){ // need to see why this doesn't work 
      console.log('NEED message'); 
      return;
    }



    console.log(email);
    console.log(title);
    console.log(message);
  }

  isValidEmail(userEmail: any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(userEmail);
  }
}
