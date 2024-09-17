import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] = [];
  
  ngOnInit() {
    this.items = [
      {label: "Home", icon: 'pi pi-home'},
      {label: "Gallery", icon: 'pi pi-star'},
      {label: "About", icon: 'pi pi-user'},
      {label: "Contact", icon: 'pi pi-phone'},
    ]
  }
}

export class MenuItem {
  label: string | undefined;
  icon: string | undefined;
}