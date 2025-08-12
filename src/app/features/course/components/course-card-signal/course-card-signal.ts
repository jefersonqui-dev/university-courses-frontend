import { CommonModule } from '@angular/common';
import { Component, input, output, computed } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card-signal.html',
  styleUrl: './course-card-signal.css'
})
export class CourseCardSignal {
  course = input.required<Course>(); //Required Significa que el padre debe proporcionar este input
  enrollCourse = output<number>();
  viewDetails = output<number>();

  //signal computada para saber si el input esta lleno
  isFull = computed(() => this.course().enrolledStudents >= this.course().maxStudents);

  onEnrollClick(): void {
    if(!this.isFull()){
      alert('Intentando inscribir al curso (Signals): '+ this.course().name);
      this.enrollCourse.emit(this.course().id);
    } else{
      alert('Este curso está lleno y no se puede inscribir (Signals). ');
    }
  }
  
  onViewDetailsClick(): void {
    this.viewDetails.emit(this.course().id);
  }
}
