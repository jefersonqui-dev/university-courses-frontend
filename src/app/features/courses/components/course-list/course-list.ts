import { Component, OnInit } from '@angular/core';
import { Course } from '../../course.models';
@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courses: Course[] = [];
  allCourses: Course[] = [];
  filterTerm: string = '';
  loading: boolean = true; 

  constructor(){}

  ngOnInit(): void{
    this.loading = true;
    //Simulamor carga de datos
    setTimeout(() => {
      this.allCourses = [
        {
          id: 1,
          code: 'CS101',
          name: 'Programación Estructurada',
          credits: 4,
          professor: 'Dr. Rubiel Vargas',
          description: "Fundamentos de programación estructurada utilizando C++. Se abordan conceptos básicos de algoritmos, estructuras de control y funciones.",
          imageUrl: 'https://images.cdn3.buscalibre.com/fit-in/360x360/88/91/8891a7b83c78e4b407237f4763905970.jpg'
        },
        {
          id: 2,
          code: 'EL202',
          name: 'Laboratorio de Dispositivos Pasivos',
          credits: 2,
          professor: 'Dra. Laura Martínez',
          description: "Prácticas experimentales con resistencias, capacitores e inductores. Análisis de circuitos pasivos y medición de parámetros eléctricos.",
          imageUrl: 'https://www.electronicafacil.net/tutoriales/img/elementos-pasivos-circuitos.jpg'
        },
        {
          id: 3,
          code: 'MA203',
          name: 'Ecuaciones Diferenciales',
          credits: 3,
          professor: 'Dr. Juan Pérez',
          description: "Estudio de ecuaciones diferenciales ordinarias y sus aplicaciones en ingeniería. Métodos de solución analítica y numérica.",
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Differential_equation_example.png'
        },
        {
          id: 4,
          code: 'EL204',
          name: 'Sistemas Analógicos',
          credits: 4,
          professor: 'Dra. Ana Gómez',
          description: "Análisis y diseño de sistemas electrónicos analógicos. Amplificadores operacionales, filtros y osciladores.",
          imageUrl: 'https://www.electronicafacil.net/tutoriales/img/sistemas-analogicos.jpg'
        },
        {
          id: 5,
          code: 'EL305',
          name: 'Procesamiento de Señales',
          credits: 3,
          professor: 'Dr. Carlos Ramírez',
          description: "Introducción al procesamiento digital de señales. Transformada de Fourier, filtrado y aplicaciones en comunicaciones.",
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Signal_processing_diagram.png'
        },
        {
          id: 6,
          code: 'FI210',
          name: 'Termodinámica',
          credits: 4,
          professor: 'Dra. Patricia Herrera',
          description: "Principios de la termodinámica, leyes y aplicaciones en sistemas físicos y de ingeniería.",
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Thermodynamics_equation.jpg'
        },
        {
          id: 7,
          code: 'FI211',
          name: 'Vibraciones y Ondas',
          credits: 3,
          professor: 'Dr. Andrés Torres',
          description: "Estudio de movimientos vibratorios y propagación de ondas mecánicas y electromagnéticas.",
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Wave_motion.gif'
        },
        {
          id: 8,
          code: 'MA310',
          name: 'Modelos Físico-Matemáticos para Ingeniería',
          credits: 4,
          professor: 'Dra. Gabriela Suárez',
          description: "Formulación y análisis de modelos matemáticos aplicados a problemas de ingeniería utilizando herramientas avanzadas.",
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Mathematical_modeling.png'
        },
        {
          id: 9,
          code: 'FI101',
          name: 'Mecánica',
          credits: 5,
          professor: 'Dr. Enrique López',
          description: "Cinemática y dinámica de partículas y cuerpos rígidos. Leyes de Newton y conservación de la energía.",
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Newton%27s_cradle_animation_book_2.gif'
        },
        {
          id: 10,
          code: 'FI220',
          name: 'Electromagnetismo',
          credits: 4,
          professor: 'Dra. Silvia Mendoza',
          description: "Campos eléctricos y magnéticos, leyes de Maxwell y aplicaciones en dispositivos eléctricos.",
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Electromagnetism.png'
        }
      ];
      this.courses = this.allCourses;
      this.loading = false;
    },1000);
  }

}
