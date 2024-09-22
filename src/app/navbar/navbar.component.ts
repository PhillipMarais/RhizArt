import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;  // Track if the page has been scrolled

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: "Home", icon: 'pi pi-home' },
      { label: "Gallery", icon: 'pi pi-star' },
      { label: "About", icon: 'pi pi-user' },
      { label: "Contact", icon: 'pi pi-phone' }
    ];
  }

  // Listen for the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 0;  // True if scrolled down, false if at top
  }
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -70;  // Adjust this based on your navbar's height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

export class MenuItem {
  label: string | undefined;
  icon: string | undefined;
}
