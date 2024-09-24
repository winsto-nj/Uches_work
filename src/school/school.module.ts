import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { DbModule } from 'src/db/db.module';

@Module({

    imports:[DbModule],
    controllers:[SchoolController],
    providers:[SchoolService]
})
export class SchoolModule {}
