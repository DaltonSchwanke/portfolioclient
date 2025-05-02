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
import { ProjectComponent } from '../project/project.component';
import { BlogComponent } from '../blog/blog.component';

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
    ProjectsComponent,
    ProjectComponent,
    BlogComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeSection: string = 'home';
  selectedProjectSlug: string | null = null;
  selectedBlogSlug: string | null = null;

  onSectionChange(section: string): void {
    this.activeSection = section;
  }

  showProject(slug: string): void {
    this.selectedProjectSlug = slug;
    this.activeSection = 'projectDetail';
  }

  showBlog(slug: string): void {
    this.selectedBlogSlug = slug;
    this.activeSection = 'blogDetail';
  }

  goToProjects(){
    this.activeSection = "projects";
  }

  goToBlogs(){
    this.activeSection = "blogs";
  }
}
