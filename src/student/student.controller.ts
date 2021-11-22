import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDTO, StudentDTO, UpdateStudentDTO } from './student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): StudentDTO[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') id: string): StudentDTO {
    return this.studentService.getStudentById(id);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDTO): StudentDTO {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') id: string,
    @Body() body: UpdateStudentDTO,
  ) {
    return this.studentService.updateStudent(id, body);
  }
}
