// custom-hash-location-strategy.ts
import { HashLocationStrategy, PlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomHashLocationStrategy extends HashLocationStrategy {
  constructor(platformLocation: PlatformLocation) {
    super(platformLocation);
  }

  override prepareExternalUrl(internal: string): string {
    const url = super.prepareExternalUrl(internal);
    return url.replace('#/', '#');
  }
}