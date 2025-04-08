import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() sectionChange = new EventEmitter<string>();

  goToSection(section: string): void {
    this.sectionChange.emit(section);
  }
}