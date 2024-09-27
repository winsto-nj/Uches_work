import { Injectable } from '@nestjs/common';
import * as forge from 'node-forge';
import { DbService } from 'src/db/db.service';

@Injectable()
export class EncryptionService {
    constructor(private prisma: DbService) {}

    // Generate RSA keys using node-forge
  generateEncryptionKeys(): { publicKey: string; privateKey: string } {
    const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });

    const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
    const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);

    return { publicKey: publicKeyPem, privateKey: privateKeyPem };
  }

  async storeKeys(schoolId: number) {
    const keys = this.generateEncryptionKeys();
    
    try{
    return await this.prisma.encryption_keys.create({
      data: {
        name: `KeyPair for School ${schoolId}`,
        school_Id: Number(schoolId),
        public_key: keys.publicKey,
        private_key: keys.privateKey,
      },
    
    });
} catch (error) {
    console.error('Error storing keys:', error);
    throw new Error('Failed to store encryption keys');
}

}
}

