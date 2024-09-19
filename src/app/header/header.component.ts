import { Component, HostListener, OnInit } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullText = "Your art, your space.";

  phrases: string[] = [
    "Canvas, Your Story.",
    "Style, Your Statement.",
    "Passion, Your Art.",
    "Space, Your Inspiration.",
    "Walls, Your Masterpiece.",
    "Taste, Your Creation.",
    "Mood, Your Design.",
    "Home, Your Gallery.",
    "Expression, Your Freedom.",
    "Vision, Your Collection."
  ];

  typedText: string = "";
  currentPhraseIndex: number = 0;
  isTyping: boolean = true;
  typingSpeed: number = 100;
  erasingSpeed: number = 50;
  pauseBetweenPhrases: number = 1000;

  async ngOnInit(): Promise<void> {
    this.startTypewriterEffect();
    await this.loadParticles();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollTop = window.scrollY;  // Get the current scroll position
    const parallaxSpeed = 0.2;  // Adjust this value for faster/slower parallax effect

    // Adjust the background-position based on scroll position
    const background = document.getElementById('background');
    if (background) {
      background.style.backgroundPositionY = `${scrollTop * parallaxSpeed - 220}px`;
    }
  }

  startTypewriterEffect(): void {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    if (this.isTyping) {
      if (this.typedText.length < currentPhrase.length) {
        this.typedText += currentPhrase.charAt(this.typedText.length);
        setTimeout(() => this.startTypewriterEffect(), this.typingSpeed);
      } else {
        this.isTyping = false;
        setTimeout(() => this.startTypewriterEffect(), this.pauseBetweenPhrases);
      }
    } else {
      if (this.typedText.length > 0) {
        this.typedText = this.typedText.substring(0, this.typedText.length - 1);
        setTimeout(() => this.startTypewriterEffect(), this.erasingSpeed);
      } else {
        this.isTyping = true;
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
        setTimeout(() => this.startTypewriterEffect(), this.typingSpeed);
      }
    }
  }

  async loadParticles() {
    await loadAll(tsParticles);

    tsParticles.load({
      id: "tsparticles",
      options: {
        fullScreen: false,
        particles: {
          number: {
            value: 15
          },
          color: {
            value: "#50a99f"
          },
          links: {
            enable: true,
            distance: 550,
            color: {
              value: "#50a99f"
            },
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.8
          },
          size: {
            value: {
              min: 6,
              max: 9
            }
          },
          move: {
            enable: true,
            speed: 1
          }
        },
        poisson: {
          enable: true
        },
        detectRetina: true
      }
    });
  }
}
