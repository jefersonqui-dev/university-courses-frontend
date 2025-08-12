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
        {
          id: 1,
          code: 'CS101',
          name: 'Programación Estructurada',
          credits: 4,
          department: 'Ingeniería de Software',
          professor: 'Dr. Rubiel Vargas',
          description: "Fundamentos de programación estructurada utilizando C++. Se abordan conceptos básicos de algoritmos, estructuras de control y funciones.",
          enrolledStudents: 25,
          maxStudents: 30,
          imageUrl: 'https://images.cdn3.buscalibre.com/fit-in/360x360/88/91/8891a7b83c78e4b407237f4763905970.jpg'
        },
        {
          id: 2,
          code: 'EL202',
          name: 'Laboratorio de Dispositivos Pasivos',
          credits: 2,
          department: 'Ingeniería Electrónica',
          professor: 'Dra. Laura Martínez',
          description: "Prácticas experimentales con resistencias, capacitores e inductores. Análisis de circuitos pasivos y medición de parámetros eléctricos.",
          enrolledStudents: 18,
          maxStudents: 25,
          imageUrl: 'https://static9.depositphotos.com/1472901/1189/i/450/depositphotos_11897128-stock-photo-electronic-components.jpg'
        },
        {
          id: 3,
          code: 'MA203',
          name: 'Ecuaciones Diferenciales',
          credits: 3,
          department: 'Ingeniería Matemática',
          professor: 'Dr. Juan Pérez',
          description: "Estudio de ecuaciones diferenciales ordinarias y sus aplicaciones en ingeniería. Métodos de solución analítica y numérica.",
          enrolledStudents: 30,
          maxStudents: 35,
          imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTcwNCQiZwfEL8oDX7YqqrNt4o-9IT_165cnX1HK6DqEhL-LetFrwbxA_ewexgxRPs50MlwMEQbjRBXXo7S_N1eja8nmfPm-IEM6SgLUShSurGYAZmSc9-madao_Qme8O69xMGqujp-qM/s1600/lorenz01.png'
        },
        {
          id: 4,
          code: 'EL204',
          name: 'Sistemas Analógicos',
          credits: 4,
          department: 'Ingeniería Electrónica',
          professor: 'Dra. Ana Gómez',
          description: "Análisis y diseño de sistemas electrónicos analógicos. Amplificadores operacionales, filtros y osciladores.",
          enrolledStudents: 22,
          maxStudents: 30,
          imageUrl: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147494123/images/58403db-fcd7-372e-5df3-8f60afc1fc4c_oscilloscope-4323959_1280.jpg'
        },
        {
          id: 5,
          code: 'EL305',
          name: 'Procesamiento de Señales',
          credits: 3,
          department: 'Ingeniería Electrónica',
          professor: 'Dr. Carlos Ramírez',
          description: "Introducción al procesamiento digital de señales. Transformada de Fourier, filtrado y aplicaciones en comunicaciones.",
          enrolledStudents: 15,
          maxStudents: 25,
          imageUrl: 'https://www.datocms-assets.com/53444/1667848153-iir-and-fir-filters-phase-shift.png?auto=format&fit=max&w=1024'
        },
        {
          id: 6,
          code: 'FI210',
          name: 'Termodinámica',
          credits: 4,
          department: 'Ingeniería Física',
          professor: 'Dra. Patricia Herrera',
          description: "Principios de la termodinámica, leyes y aplicaciones en sistemas físicos y de ingeniería.",
          enrolledStudents: 28,
          maxStudents: 30,
          imageUrl: 'https://api.buscatuprofesor.es/news_image/5f/7D/5f7DxHkisJLhBaT6vfOdO4dlhpkwTQJ6pLOegaHb.jpeg'
        },
        {
          id: 7,
          code: 'FI211',
          name: 'Vibraciones y Ondas',
          credits: 3,
          department: 'Ingeniería Física',
          professor: 'Dr. Andrés Torres',
          description: "Estudio de movimientos vibratorios y propagación de ondas mecánicas y electromagnéticas.",
          enrolledStudents: 20,
          maxStudents: 30,
          imageUrl: 'https://img.freepik.com/vector-premium/ondas-sonido-diseno-dibujos-animados-paquete-diferentes-formas-frecuencia-audio-efecto-onda-musica-ecualizador-vibraciones-musicales-coloridas-elementos-planos-aislados-ilustracion-vectorial_9209-10333.jpg'
        },
        {
          id: 8,
          code: 'MA310',
          name: 'Modelos Físico-Matemáticos para Ingeniería',
          credits: 4,
          department: 'Ingeniería Matemática',
          professor: 'Dra. Gabriela Suárez',
          description: "Formulación y análisis de modelos matemáticos aplicados a problemas de ingeniería utilizando herramientas avanzadas.",
          enrolledStudents: 12,
          maxStudents: 20,
          imageUrl: 'https://cdn.pixabay.com/photo/2021/05/09/14/59/fractal-6241216_1280.jpg'
        },
        {
          id: 9,
          code: 'FI101',
          name: 'Mecánica',
          credits: 5,
          department: 'Ingeniería Física',
          professor: 'Dr. Enrique López',
          description: "Cinemática y dinámica de partículas y cuerpos rígidos. Leyes de Newton y conservación de la energía.",
          enrolledStudents: 32,
          maxStudents: 35,
          imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20220107/pngtree-very-detailed-mechanical-engineering-blueprint-with-gauge-project-build-engineering-photo-image_15654674.jpg'
        },
        {
          id: 10,
          code: 'FI220',
          name: 'Electromagnetismo',
          credits: 4,
          department: 'Ingeniería Eléctrica',
          professor: 'Dra. Silvia Mendoza',
          description: "Campos eléctricos y magnéticos, leyes de Maxwell y aplicaciones en dispositivos eléctricos.",
          enrolledStudents: 27,
          maxStudents: 30,
          imageUrl: 'https://cdn.goconqr.com/uploads/image_clipping/image/86800/electromagnetismo.jpg'
        }
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
