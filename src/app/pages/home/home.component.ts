import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.handleUrl(this.router.url);

    this.router.events.subscribe(event => {
      if ((event as any).constructor && (event as any).constructor.name === 'NavigationEnd') {
        // Use NavigationEnd type if imported, otherwise check name
        this.handleUrl((event as any).urlAfterRedirects);
      }
    });
  }

  private handleUrl(path: string): void {
    if (path.startsWith('/project/')) {
      const slug = path.split('/project/')[1];
      this.selectedProjectSlug = slug;
      this.activeSection = 'projectDetail';
    } else if (path.startsWith('/blog/')) {
      const slug = path.split('/blog/')[1];
      this.selectedBlogSlug = slug;
      this.activeSection = 'blogDetail';
    } else if (path.startsWith('/projects')) {
      this.activeSection = 'projects';
      this.selectedProjectSlug = null;
      this.selectedBlogSlug = null;
    } else if (path.startsWith('/blogs')) {
      this.activeSection = 'blogs';
      this.selectedProjectSlug = null;
      this.selectedBlogSlug = null;
    } else if (path.startsWith('/contact')) {
      this.activeSection = 'contact';
      this.selectedProjectSlug = null;
      this.selectedBlogSlug = null;
    } else {
      this.activeSection = 'home';
      this.selectedProjectSlug = null;
      this.selectedBlogSlug = null;
    }
  }

  onSectionChange(section: string): void {
    this.activeSection = section;
    this.selectedProjectSlug = null;
    this.selectedBlogSlug = null;
    this.location.go(`/${section}`);
  }

  showProject(slug: string): void {
    this.selectedProjectSlug = slug;
    this.activeSection = 'projectDetail';
    this.location.go(`/project/${slug}`);
  }

  showBlog(slug: string): void {
    this.selectedBlogSlug = slug;
    this.activeSection = 'blogDetail';
    this.location.go(`/blog/${slug}`);
  }

  goToProjects(): void {
    this.selectedProjectSlug = null;
    this.activeSection = 'projects';
    this.location.go('/projects');
  }

  goToBlogs(): void {
    this.selectedBlogSlug = null;
    this.activeSection = 'blogs';
    this.location.go('/blogs');
  }
}
