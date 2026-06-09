import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsVellichorNookSection } from './what-is-vellichor-nook-section';

describe('WhatIsVellichorNookSection', () => {
  let component: WhatIsVellichorNookSection;
  let fixture: ComponentFixture<WhatIsVellichorNookSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsVellichorNookSection],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatIsVellichorNookSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
