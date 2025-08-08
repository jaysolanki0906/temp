import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hasedRouteGuard } from './hased-route.guard';

describe('hasedRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasedRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
