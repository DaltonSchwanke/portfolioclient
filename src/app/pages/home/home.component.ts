import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { FeaturedProjectsComponent } from '../../components/featured-projects/featured-projects.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { EducationComponent } from '../../components/education/education.component';
import { FeaturedBlogsComponent } from '../../components/featured-blogs/featured-blogs.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    IntroComponent,
    FeaturedProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    FeaturedBlogsComponent,
    ContactComponent,
    NavbarComponent,
    BlogsComponent,
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeSection: string = 'home';

  onSectionChange(section: string): void {
    this.activeSection = section;
  }

}
