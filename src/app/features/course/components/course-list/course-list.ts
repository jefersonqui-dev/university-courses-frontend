import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses: Course[] = [];
  allCourse: Course[] = [];
  loading: boolean = true;
  filterTerm: string = '';
  constructor (){}

  ngOnInit(): void{
    this.loading = true;
    //simular carga de datos
    setTimeout(() => {
      this.allCourse = [
        {
          id: 1,
          code: 'CS101',
          name: 'Programación Estructurada',
          credits: 4,
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
          professor: 'Dra. Silvia Mendoza',
          description: "Campos eléctricos y magnéticos, leyes de Maxwell y aplicaciones en dispositivos eléctricos.",
          enrolledStudents: 27,
          maxStudents: 30,
          imageUrl: 'https://cdn.goconqr.com/uploads/image_clipping/image/86800/electromagnetismo.jpg'
        }
      ];
      this.courses = this.allCourse;
      this.loading = false;
    },1000);
  }
  filterCourses(): void{
    if(!this.filterTerm){
      this.courses = this.allCourse;
    }else {
      this.courses = this.allCourse.filter(course =>
        course.name.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(this.filterTerm.toLowerCase())
        

        );  
    }
  }
}
