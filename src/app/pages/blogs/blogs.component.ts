import { Component } from '@angular/core';
import { BlogsServiceService } from '../../services/blogsService/blogs-service.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  constructor( private blogsService: BlogsServiceService) {
    this.blogsService.getBlogs();
  }

}
