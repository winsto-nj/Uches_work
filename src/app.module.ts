import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbService } from './db/db.service';
import { StudentService } from './student/student.service';
import { UserService } from './_user/_user.service';
import { AdminService } from './admin/admin.service';
import { DbModule } from './db/db.module';
import { SchoolService } from './school/school.service';
import { SchoolController } from './school/school.controller';
import { SchoolModule } from './school/school.module';
import { EncryptionService } from './encryption/encryption.service';
import { EncryptionController } from './encryption/encryption.controller';
import { EncryptionModule } from './encryption/encryption.module';

@Module({
  imports: [AuthModule, DbModule, SchoolModule, EncryptionModule],
  controllers: [AppController, SchoolController, EncryptionController],
  providers: [AppService, DbService, StudentService, UserService, AdminService, SchoolService, EncryptionService],
})
export class AppModule {}
