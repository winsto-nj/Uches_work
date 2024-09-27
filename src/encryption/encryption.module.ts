import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { DbService } from 'src/db/db.service';
import { EncryptionController } from './encryption.controller';


@Module({
    providers:[EncryptionService,DbService],
    controllers:[EncryptionController]
})
export class EncryptionModule {}
