import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BlogsServiceService {

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
   *  This function is used send a request to get blogs data
   * 
   * @returns Blogs Data
   */
  getBlogs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blogs`, { headers: this.getHeaders() });
  }

  getBlog(): void{
    console.log("This is where the request will be sent for a particular blog post");
  }
}
