import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { TeacherStudentController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, TeacherStudentController],
})
export class AppModule {}
