import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HomeServiceService } from '../../services/homeService/home-service.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experienceData: any = { data: [] };

  constructor( private homeService: HomeServiceService, private datePipe: DatePipe) {}

  /**
   *  This function is ran when the component loads and will call a function from the
   *  home service to get the experience data, once that is done it will then filter the 
   *  experience data to get the latest three items if the list is longer than 3 items, if
   *  not it will return the whole list. After that it will format the dates. If there is 
   *  an error getting the data it will then return an error that will be printed to the 
   *  console. 
   */
  ngOnInit(): void {
    this.homeService.getExperience().subscribe({
      next: (data) => {
        this.experienceData.data = this.filterRecentExperience(data.data);
        this.formatDates();
      },
      error: (err) => {
        console.error("Error fetching experience data:", err);
      }
    });
  }

  /**
   *  This functions takes the array of experience objects and will check to
   *  see if it meets two conditioons, the list is not null and it is longer
   *  then 3 items, if it meets those conditions it will sort the list starting
   *  with the latest start date and then take the latest 3 items. If it doesn't
   *  meet those conditions it will then return the whole list but it will never
   *  return any more than 3 items. 
   * 
   * @param experienceList Array of experience objects
   * @returns Array of Experience Objects no less than 3 items
   */
  filterRecentExperience(experienceList: any[]): any[] {
    if (!experienceList || experienceList.length <= 3) {
      return experienceList;
    }
    return experienceList.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).slice(0, 3);
  }

  /**
   *  This function will take the array of experience items and it will format the
   *  date to be 'Month, Year' instead of 'MM/DD/YYYY' for display purposes. 
   */
  formatDates(): void {
    this.experienceData.data.forEach((exp: any) => {
      exp.startDate = this.datePipe.transform(exp.startDate, 'MMMM, yyyy'); 
      exp.endDate = this.datePipe.transform(exp.endDate, 'MMMM, yyyy'); 
    });
  }

}
