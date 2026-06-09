import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionSection } from './definition-section';

describe('DefinitionSection', () => {
  let component: DefinitionSection;
  let fixture: ComponentFixture<DefinitionSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefinitionSection],
    }).compileComponents();

    fixture = TestBed.createComponent(DefinitionSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
