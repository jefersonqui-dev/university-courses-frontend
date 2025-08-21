import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { CourseCardSignal } from '../course-card-signal/course-card-signal';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardSignal],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  // Signals para el estado de la aplicación
  allCourses = signal<Course[]>([]);
  filterDepartament = signal<string>('');
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  // Signal computada para filtrar cursos por departamento
  filteredCourses = computed(() => {
    const currentFilter = this.filterDepartament().toLowerCase();
    if(!currentFilter){
      return this.allCourses();
    }else{
      return this.allCourses().filter(course =>
        course.department.toLowerCase().includes(currentFilter));
      ;
    }
  });

  constructor (){
    // Effect para monitorear cambios en el filtro de departamento
    effect(() => {
      console.log(`El filtro de departamento ha cambiado a: "${this.filterDepartament()}"`);
    });
  }

  ngOnInit(): void{
    this.loading.set(true);
    this.error.set(null);
    
    // Simular carga de datos con timeout
    setTimeout(() => {
      const simulatedData: Course[] = [
        
      ];
      this.allCourses.set(simulatedData);
      this.loading.set(false);
    },1500);
  }
  
  /**
   * Actualiza la signal 'filterDepartament' desde el input del filtro
   * @param event - Evento del input HTML
   */
  onFilterInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.filterDepartament.set(inputElement.value);
  }

  /**
   * Maneja el evento 'enrollCourse' emitido por el componente hijo
   * Solo permite inscribir si hay cupos disponibles
   * @param courseId - ID del curso a inscribir
   */
  handleEnrollCourse(courseId: number): void{
    this.allCourses.update(currentCourses => 
      currentCourses.map(course =>
        course.id === courseId && course.enrolledStudents < course.maxStudents
        ? {...course, enrolledStudents: course.enrolledStudents + 1  
        } : course
      )
    );
    console.log(`Inscrito en el curso con ID: ${courseId}`);
  }

  /**
   * Maneja el evento 'viewDetails' emitido por el componente hijo
   * @param courseId - ID del curso para ver detalles
   */
  handleViewDetails(courseId: number): void {
    console.log(`Ver detalles del curso con ID: ${courseId}`);
    alert(`Has hecho click en 'Ver Detalles' para el curso con ID: ${courseId}`);
  }

}
