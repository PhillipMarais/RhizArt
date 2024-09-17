import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  artworks = [
    { title: 'test 1 ', image: 'assets/artworks/Art-1.jpg' },
    { title: 'test 2 ', image: 'assets/artworks/Art-1.jpg' },
    { title: 'test 3 ', image: 'assets/artworks/Art-1.jpg' },
    { title: 'test 3 ', image: 'assets/artworks/Art-1.jpg' },
    { title: 'test 3 ', image: 'assets/artworks/Art-1.jpg' },
    { title: 'test 3 ', image: 'assets/artworks/Art-1.jpg' },
    { title: 'test 3 ', image: 'assets/artworks/Art-1.jpg' },
  ];
}
