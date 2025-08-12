import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardSignal } from './course-card-signal';

describe('CourseCardSignal', () => {
  let component: CourseCardSignal;
  let fixture: ComponentFixture<CourseCardSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
