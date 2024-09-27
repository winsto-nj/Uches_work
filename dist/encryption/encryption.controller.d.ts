import { EncryptionService } from './encryption.service';
export declare class EncryptionController {
    private readonly encryptionservice;
    constructor(encryptionservice: EncryptionService);
    generateKeys(schoolId: String): Promise<{
        message: string;
        result: {
            id: number;
            name: string;
            school_Id: number;
            private_key: string;
            public_key: string;
        };
        statusCode?: undefined;
        error?: undefined;
    } | {
        statusCode: number;
        message: string;
        error: any;
        result?: undefined;
    }>;
}
