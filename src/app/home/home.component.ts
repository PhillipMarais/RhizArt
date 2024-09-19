import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artworks = [
    { title: 'Mona Lisa', image: 'assets/artworks/Art-1.jpg' },
    { title: 'The Starry Night', image: 'assets/artworks/Art-1.jpg' },
    { title: 'Girl with a Pearl Earring', image: 'assets/artworks/Art-1.jpg' },
    { title: 'The Kiss', image: 'assets/artworks/Art-1.jpg' },
    { title: 'The birth of Venus', image: 'assets/artworks/Art-1.jpg' },
    { title: 'Las Meninas', image: 'assets/artworks/Art-1.jpg' },
    { title: 'Guernica', image: 'assets/artworks/Art-1.jpg' },
  ];

  isPreviewOpen = false;  // Tracks if the preview modal is open
  selectedImage: any = {};  // Holds the currently selected image

  openPreview(artwork: any): void {
    this.selectedImage = artwork;
    this.isPreviewOpen = true;

    // Add 'show' class to trigger transition
    setTimeout(() => {
      const modal = document.querySelector('.image-preview');
      modal?.classList.add('show');
    }, 10);  // Slight delay to ensure the class is added after rendering
  }

  closePreview(): void {
    // Remove 'show' class to start closing transition
    const modal = document.querySelector('.image-preview');
    modal?.classList.remove('show');

    // Delay to wait for the transition to complete before closing
    setTimeout(() => {
      this.isPreviewOpen = false;
    }, 300);  // Match the transition duration (0.3s)
  }

    ngOnInit(): void {
       
    }
    
}