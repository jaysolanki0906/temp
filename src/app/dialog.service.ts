// dialog.service.ts
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private hashChangeCallback: ((hash: string) => void) | null = null;

  constructor(private router: Router, private location: Location) {}

  listenHashChange(callback: (hash: string) => void) {
    this.hashChangeCallback = callback;

    // Listen to browser hash changes
    window.addEventListener('hashchange', () => {
      const hash = this.getCurrentHash();
      if (this.hashChangeCallback) {
        this.hashChangeCallback(hash);
      }
    });

    // Listen to Angular router events
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const hash = this.getCurrentHash();
        if (this.hashChangeCallback && hash) {
          this.hashChangeCallback(hash);
        }
      });
  }

  setHash(hash: string) {
    const cleanHash = hash.startsWith('/') ? hash.substring(1) : hash;
    // Update the URL fragment without reloading
    this.router.navigate([], { fragment: cleanHash, queryParamsHandling: 'preserve' });
  }

  clearHash() {
    // Clear the URL fragment without reloading
    this.router.navigate([], { fragment: undefined, queryParamsHandling: 'preserve' });
  }

  getCurrentHash(): string {
    // Get the current hash from the Location service
    const url = this.location.path(true);
    const hashIndex = url.indexOf('#');
    return hashIndex !== -1 ? url.substring(hashIndex + 1) : '';
  }
}