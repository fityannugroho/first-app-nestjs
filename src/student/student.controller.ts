import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') id: string) {
    return `Get student #${id}`;
  }

  @Post()
  createStudent(
    @Body('name') name: string,
    @Body('teacher') teacherId: string,
  ) {
    return `Created a student with name: ${name}, teacherId: ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') id: string, @Body() body: object) {
    return `Student #${id} is updated with: ${JSON.stringify(body)}`;
  }
}
