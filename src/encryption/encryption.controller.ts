import { Controller, Param, Post } from '@nestjs/common';
import { EncryptionService } from './encryption.service';

@Controller('encryption')
export class EncryptionController {
    constructor(private readonly encryptionservice : EncryptionService){}

    @Post('create/:schoolId')
    async generateKeys(@Param('schoolId') schoolId: String) {
        try {
            const id = Number(schoolId); // Convert schoolId to a number
            if (isNaN(id)) {
                throw new Error('Invalid school ID');
            }
            const result = await this.encryptionservice.storeKeys(id);
            return { message: 'Encryption keys generated successfully', result };
        } catch (error) {
            console.error('Error generating keys:', error);
            return {
                statusCode: 500,
                message: 'Internal server error',
                error: error.message,
            };
        }
    }
}
