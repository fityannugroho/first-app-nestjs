import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { StudentDTO } from 'src/student/student.dto';
import { TeacherDTO } from './teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): TeacherDTO[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId', ParseUUIDPipe) id: string): TeacherDTO {
    return this.teacherService.getTeacherById(id);
  }

  @Get('/:teacherId/students')
  getStudentsByTeacherId(
    @Param('teacherId', ParseUUIDPipe) teacherId: string,
  ): StudentDTO[] {
    return this.teacherService.getStudentsByTeacherId(teacherId);
  }
}
