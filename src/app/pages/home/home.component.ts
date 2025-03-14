import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { FeaturedProjectsComponent } from '../../components/featured-projects/featured-projects.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { EducationComponent } from '../../components/education/education.component';
import { FeaturedBlogsComponent } from '../../components/featured-blogs/featured-blogs.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    IntroComponent,
    FeaturedProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    FeaturedBlogsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
