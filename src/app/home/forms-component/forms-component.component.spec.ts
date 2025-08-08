import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponentComponent } from './forms-component.component';

describe('FormsComponentComponent', () => {
  let component: FormsComponentComponent;
  let fixture: ComponentFixture<FormsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
