import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { students } from 'src/db';
import { CreateStudentDTO, StudentDTO, UpdateStudentDTO } from './student.dto';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): StudentDTO[] {
    return this.students;
  }

  getStudentById(id: string): StudentDTO {
    return this.students.find((student) => student.id === id);
  }

  createStudent(payload: CreateStudentDTO): StudentDTO {
    const newStudent = { id: uuid(), ...payload };

    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: string, payload: UpdateStudentDTO): StudentDTO {
    let updatedStudent: StudentDTO;

    this.students = this.students.map((student) => {
      if (student.id === id) {
        updatedStudent = { id: id, ...payload };
        return updatedStudent;
      } else {
        return student;
      }
    });

    return updatedStudent;
  }
}
