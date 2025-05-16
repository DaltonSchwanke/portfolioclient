import { Component, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() activeSection: string = 'home';

  setActive(section: string): void {
    this.activeSection = section;
    this.sectionChange.emit(section);
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}