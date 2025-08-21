
import { Routes } from '@angular/router';
// import { CourseList } from './features/course/components/course-list/course-list';

export const routes: Routes = [
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {
        path: 'courses',
        loadChildren: () => import('./features/course/courses.routes').then(m => m.COURSES_ROUTES)
    },
    {
        path: '**', redirectTo: '/courses'
    }
];
