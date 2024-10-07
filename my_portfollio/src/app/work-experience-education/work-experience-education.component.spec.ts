import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceEducationComponent } from './work-experience-education.component';

describe('WorkExperienceEducationComponent', () => {
  let component: WorkExperienceEducationComponent;
  let fixture: ComponentFixture<WorkExperienceEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
