import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDialogHomeViewComponent } from './home-dialog-home-view.component';

describe('HomeDialogHomeViewComponent', () => {
  let component: HomeDialogHomeViewComponent;
  let fixture: ComponentFixture<HomeDialogHomeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDialogHomeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDialogHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
