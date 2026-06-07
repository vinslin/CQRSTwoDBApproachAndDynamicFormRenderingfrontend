import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formanswers } from './formanswers';

describe('Formanswers', () => {
  let component: Formanswers;
  let fixture: ComponentFixture<Formanswers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formanswers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formanswers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
