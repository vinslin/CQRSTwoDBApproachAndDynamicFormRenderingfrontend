import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubmittedForms } from './show-submitted-forms';

describe('ShowSubmittedForms', () => {
  let component: ShowSubmittedForms;
  let fixture: ComponentFixture<ShowSubmittedForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSubmittedForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSubmittedForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
