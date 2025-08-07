import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardTraditional } from './course-card-traditional';

describe('CourseCardTraditional', () => {
  let component: CourseCardTraditional;
  let fixture: ComponentFixture<CourseCardTraditional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardTraditional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardTraditional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
