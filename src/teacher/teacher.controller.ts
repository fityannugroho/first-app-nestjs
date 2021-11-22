import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All teachers';
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') id: string) {
    return `Get teacher #${id}`;
  }

  @Post()
  createTeacher(@Body() body: object) {
    return `Created a teacher with data: ${JSON.stringify(body)}`;
  }
}
