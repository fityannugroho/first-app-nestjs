import { Injectable } from '@nestjs/common';
import { students, teachers } from 'src/db';
import { StudentDTO } from 'src/student/student.dto';
import { TeacherDTO } from './teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  private students = students;

  getTeachers(): TeacherDTO[] {
    return this.teachers;
  }

  getTeacherById(id: string): TeacherDTO {
    return this.teachers.find((teacher) => teacher.id === id);
  }

  getStudentsByTeacherId(teacherId: string): StudentDTO[] {
    return this.students.filter((student) => student.teacher === teacherId);
  }
}
