import { DbService } from 'src/db/db.service';
export declare class EncryptionService {
    private prisma;
    constructor(prisma: DbService);
    generateEncryptionKeys(): {
        publicKey: string;
        privateKey: string;
    };
    storeKeys(schoolId: number): Promise<{
        id: number;
        name: string;
        school_Id: number;
        private_key: string;
        public_key: string;
    }>;
}
