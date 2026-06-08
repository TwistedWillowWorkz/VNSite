import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceSection } from './announce-section';

describe('AnnounceSection', () => {
  let component: AnnounceSection;
  let fixture: ComponentFixture<AnnounceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnounceSection],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnounceSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
