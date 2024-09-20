import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbService } from './db/db.service';
import { StudentService } from './student/student.service';
import { UserService } from './_user/_user.service';
import { AdminService } from './admin/admin.service';
import { DbModule } from './db/db.module';

@Module({
  imports: [AuthModule, DbModule],
  controllers: [AppController],
  providers: [AppService, DbService, StudentService, UserService, AdminService],
})
export class AppModule {}
