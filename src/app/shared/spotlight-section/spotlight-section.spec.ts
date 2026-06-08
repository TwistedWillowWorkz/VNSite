import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightSection } from './spotlight-section';

describe('SpotlightSection', () => {
  let component: SpotlightSection;
  let fixture: ComponentFixture<SpotlightSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotlightSection],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotlightSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
