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
  }


  setActive(section: string): void {
    // Reset all buttons
  
    this.goToSection(section);
  }

  goToSection(section: string): void {
    this.sectionChange.emit(section);
  }
}