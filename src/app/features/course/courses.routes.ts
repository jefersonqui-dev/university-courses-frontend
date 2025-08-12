import { Routes } from '@angular/router';
import { CourseList } from './components/course-list/course-list';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    component: CourseList
  }
];
