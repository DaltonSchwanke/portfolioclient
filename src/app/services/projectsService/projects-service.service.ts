import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  constructor() { }

  getProjects(): void {
    console.log("Projects Service: getting projects data");
  }
}
