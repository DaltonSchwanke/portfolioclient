import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments'; 

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {


  private apiUrl = environment.apiUrl;  // API URL 
  private apiKey = environment.apiKey;  // API Key

  constructor(private http: HttpClient) {}

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
   * This function is used to send a request to get the sidebar data
   * 
   * @returns Sidebar Data
   */
  getSideBar(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sidebar`, { headers: this.getHeaders() });
  }


  /**
   *  This function is used to send a request to get the intro data
   * 
   * @returns Intro Data
   */
  getIntro(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/intro`, { headers: this.getHeaders() });
  }


  /**
   *  This function is used to send a request to get featured projects data.
   *  For now this request is blocked off because it might be cut for reconstruction
   * 
   * @returns Featured Projects Data
   *
  getFeaturedProjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/featured-project`, { headers: this.getHeaders() });
  }
  */


  /**
   *  This function is used to send a request to get experience data
   * 
   * @returns Experience Data
   */
  getExperience(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/experiences`, { headers: this.getHeaders() });
  }


  /**
   *  This function is used to send a request to get education data
   * 
   * @returns Education Data
   */
  getEducation(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/educations`, { headers: this.getHeaders() });
  }


  /**
   *  This function is used to send a request to get featured blogs data. 
   *  For now this request is blocked off because it might be cut for reconstruction
   * 
   * @returns Featured Blogs Data
   *
  getFeaturedBlogs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/featured-blog`, { headers: this.getHeaders() });
  }
  */


  /**
   *  This function is used to send a request to get contact data
   * 
   * @returns Contact Data
   */
  getContact(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/contact`, { headers: this.getHeaders() });
  }
}
