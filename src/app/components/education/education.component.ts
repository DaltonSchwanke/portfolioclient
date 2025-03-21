import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  
  educationData: any = { data: [] };

  constructor(private homeService: HomeServiceService, private datePipe: DatePipe) {}

  /**
   *  This function is ran when the component loads and will call the home service to 
   *  run a function that will send a request to the cms to get the education data. Once 
   *  the education data is sent back it will either take the data and filter and return the 
   *  latest three items or the whole set but no more than 3 items. From there it will format
   *  the dates. If the server can't send back the data it will then send back an error that 
   *  will be printed to the console. 
   */
  ngOnInit(): void {
    this.homeService.getEducation().subscribe({
      next: (data) => {
        this.educationData.data = this.filterRecentEducation(data.data);
        this.formatDates();
      },
      error: (err) => {
        console.error("Error fetching education data:", err);
      }
    });
  }

  /** 
   *  This function will take in the array of education objects and will check to 
   *  see if the list is not null and that it has more than 3 items, if it does not
   *  meet those two conditions it will just return the list. If it does meet those 
   *  conditions it will then sort the list by the latest start dates and then return 
   *  the latest three items. 
   * 
   * @param educationList Array of Education Objects from CMS
   * @returns array of educations items no longer than 3 items 
   */
  filterRecentEducation(educationList: any[]): any[] {
    if (!educationList || educationList.length <= 3) {
      return educationList;
    }
    return educationList.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).slice(0, 3);
  }

  /**
   *  This function will take the array of education objects and format the start and 
   *  end date so that there are no longer in 'MM/DD/YYYY' but instead 'Month, Year' 
   *  for ease of display. 
   */
  formatDates(): void {
    this.educationData.data.forEach((edu: any) => {
      edu.startDate = this.datePipe.transform(edu.startDate, 'MMMM, yyyy'); 
      edu.endDate = this.datePipe.transform(edu.endDate, 'MMMM, yyyy'); 
    });
  }
}