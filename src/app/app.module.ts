import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentService } from 'src/student/student.service';
import { TeacherController } from 'src/teacher/teacher.controller';
import { TeacherService } from 'src/teacher/teacher.service';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController],
  providers: [StudentService, TeacherService],
})
export class AppModule {}
