// no-slash-hash-location-strategy.ts
import { Injectable } from '@angular/core';
import { HashLocationStrategy, PlatformLocation } from '@angular/common';

@Injectable()
export class NoSlashHashLocationStrategy extends HashLocationStrategy {
  constructor(platformLocation: PlatformLocation) {
    super(platformLocation);
  }

  override prepareExternalUrl(internal: string): string {
    return internal ? '#' + internal.replace(/^\/+/, '') : '';
  }
}
