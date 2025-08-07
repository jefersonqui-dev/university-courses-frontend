export interface Course {
    id: number;
    code: string;
    name: string;
    credits: number;
    professor: string;
    description: string;
    enrolledStudents: number;
    maxStudents: number;
    imageUrl: string;
}
