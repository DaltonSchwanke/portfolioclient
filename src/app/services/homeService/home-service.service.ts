import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor() { }

  getSideBar(): void {
    console.log("Home Service: getting sidebar data");
  }

  getIntro(): void {
    console.log("Home Service: getting intro data");
  }

  getFeaturedProjects(): void {
    console.log("Home Service: getting featured projects");
  }

  getExperience(): void {
    console.log("Home Service: getting experience data");
  }

  getEducation(): void {
    console.log("Home Service: getting education data");
  }

  getFeaturedBlgos(): void {
    console.log("Home Service: getting featured blogs");
  }

  getContact(): void {
    console.log("Home Service: getting contact data");
  }


}
