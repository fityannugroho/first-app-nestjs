import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class TeacherStudentController {
  @Get()
  getStudents(@Param('teacherId') id: string) {
    return `Get all students that associated with teacher #${id}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') id: string,
    @Param('studentId') studentId: string,
    @Body() body: object,
  ) {
    return `Update student #${studentId} that associated with teacher #${id} and new data: ${JSON.stringify(
      body,
    )}`;
  }
}
