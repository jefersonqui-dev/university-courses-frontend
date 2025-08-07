import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card-traditional',
  imports: [CommonModule],
  templateUrl: './course-card-traditional.html',
  styleUrl: './course-card-traditional.css'
})
export class CourseCardTraditional {
  @Input() course!: Course; //Recibe un objeto Course del componente padre
  @Output() enrollCourse = new EventEmitter<number>();
  @Output() viewDetails = new EventEmitter<number>();

  get isFull(): boolean {
    return this.course.enrolledStudents >= this.course.maxStudents;
  }

  onEnrollClick(): void {
    if (!this.isFull){
      alert('Intentanto inscribir al curso (Tradicional): ' + this.course.name);
      this.enrollCourse.emit(this.course.id);
    } else {
      alert('Este curso está lleno y no se puede inscribir (Tradicional). ');
    }
  }
  onViewDetailsClick(): void { 
    this.viewDetails.emit(this.course.id);
  }
}
