import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  private apiUrl = environment.apiUrl;  // API URL 
  private apiKey = environment.apiKey;  // API Key

  constructor(private http: HttpClient) { }

  /**
  * The function below is used to get the header for the API 
  * request and is used in the following methods used to retrieve data from
  * the CMS backend.  
  * 
  * @returns Http Header
  */
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });
  }


  /**
   *  This function sends a request to get projects data
   * 
   * @returns Projects Data 
   */
  getProjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects`, { headers: this.getHeaders() });
  }


  /**
   *  This function sends a request to get project data
   * 
   * @param id Project ID
   * @returns Project data related to project ID
   */
  getProjectBySlug(slug: string): Observable<any> {
    const url = `${this.apiUrl}/projects?filters[slug][$eq]=${slug}`;
    return this.http.get<any>(url);
  }
}
