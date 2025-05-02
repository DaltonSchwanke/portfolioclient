import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    //{path: 'blogs', component: BlogsComponent},
    //{path: 'blog/:slug', component: BlogComponent},
    //{path: 'projects', component: ProjectsComponent},
    //{path: 'project/:slug', component: ProjectComponent},
    {path: '**', component: HomeComponent}
];
