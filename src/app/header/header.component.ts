import { Component, OnInit } from '@angular/core';

import { tsParticles, ZIndex } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  fullText = "Your art, your space.";
  
  // Variable to hold the typed text
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
  
  typedText: string = "";  // Holds the current text being typed/erased
  currentPhraseIndex: number = 0;  // Index to track which phrase is being typed
  isTyping: boolean = true;  // Flag to track if we are typing or erasing
  typingSpeed: number = 100;  // Speed for typing characters
  erasingSpeed: number = 50;  // Speed for erasing characters
  pauseBetweenPhrases: number = 1000;  // Delay before starting to type the next phrase

  ngOnInit(): void {
     
    this.startTypewriterEffect();
  }

  startTypewriterEffect(): void {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    if (this.isTyping) {
      // Typing logic
      if (this.typedText.length < currentPhrase.length) {
        this.typedText += currentPhrase.charAt(this.typedText.length);
        setTimeout(() => this.startTypewriterEffect(), this.typingSpeed);
      } else {
        // If the typing is complete, wait for a bit then start erasing
        this.isTyping = false;
        setTimeout(() => this.startTypewriterEffect(), this.pauseBetweenPhrases);
      }
    } else {
      // Erasing logic
      if (this.typedText.length > 0) {
        this.typedText = this.typedText.substring(0, this.typedText.length - 1);
        setTimeout(() => this.startTypewriterEffect(), this.erasingSpeed);
      } else {
        // If erasing is complete, move to the next phrase and start typing
        this.isTyping = true;
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;  // Loop through the phrases
        setTimeout(() => this.startTypewriterEffect(), this.typingSpeed);
      }
    }
  }
}

const configs = {
  particles: {
    number: {
      value: 100
    },
    color: {
      value: "#ffffff"
    },
    links: {
      enable: true,
      distance: 100
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1
    },
    size: {
      value: {
        min: 4,
        max: 6
      }
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  poisson: {
    enable: true
  },
};



async function loadParticles(options: any) {
  await loadAll(tsParticles);

  await tsParticles.load({ id: "tsparticles", options });
}

loadParticles(configs);