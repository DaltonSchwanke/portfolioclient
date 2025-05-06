import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() sectionChange = new EventEmitter<string>();

  ngOnInit(): void {
    const homeBtn = document.getElementById('homeBtn');
    if(homeBtn){
      homeBtn.style.backgroundColor = 'rgb(34, 76, 168)';
    }
  }


  setActive(section: string): void {
    // Reset all buttons
    const buttons = ['home', 'projects', 'blogs', 'contact'];
    buttons.forEach(btn => {
      const element = document.getElementById(`${btn}Btn`);
      if (element) {
        element.style.backgroundColor = 'transparent';
      }
    });
  
    // Highlight the selected one
    const activeBtn = document.getElementById(`${section}Btn`);
    if (activeBtn) {
      activeBtn.style.backgroundColor = 'rgb(34, 76, 168)';
    }
  
    this.goToSection(section);
  }

  goToSection(section: string): void {
    this.sectionChange.emit(section);
  }
}