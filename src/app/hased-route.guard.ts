import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HashRouteGuard implements CanActivate {
  constructor(private router: Router) {console.log("Hased guard i simplemeted")}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;
    const hash = window.location.hash.replace(/^#/, '');
    console.log('Guard processing URL:', url, 'Hash:', hash);

    if (url.startsWith('/#settings')) {
      const cleanUrl = url.replace('/#', '/');
      console.log('Redirecting from /#settings to:', cleanUrl);
      this.router.navigateByUrl(cleanUrl, { replaceUrl: true });
      return true;
    }

    return true; 
  }
}