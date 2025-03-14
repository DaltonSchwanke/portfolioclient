import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsServiceService {

  constructor() { }

  getBlogs(): void {
    console.log("Blogs Service: getting blogs data");
  }
}
