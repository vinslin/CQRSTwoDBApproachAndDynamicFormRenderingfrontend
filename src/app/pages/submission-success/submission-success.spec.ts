import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionSuccess } from './submission-success';

describe('SubmissionSuccess', () => {
  let component: SubmissionSuccess;
  let fixture: ComponentFixture<SubmissionSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionSuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionSuccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
