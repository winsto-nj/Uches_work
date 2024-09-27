"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionService = void 0;
const common_1 = require("@nestjs/common");
const forge = require("node-forge");
const db_service_1 = require("../db/db.service");
let EncryptionService = class EncryptionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    generateEncryptionKeys() {
        const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
        const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
        const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
        return { publicKey: publicKeyPem, privateKey: privateKeyPem };
    }
    async storeKeys(schoolId) {
        const keys = this.generateEncryptionKeys();
        try {
            return await this.prisma.encryption_keys.create({
                data: {
                    name: `KeyPair for School ${schoolId}`,
                    school_Id: Number(schoolId),
                    public_key: keys.publicKey,
                    private_key: keys.privateKey,
                },
            });
        }
        catch (error) {
            console.error('Error storing keys:', error);
            throw new Error('Failed to store encryption keys');
        }
    }
};
exports.EncryptionService = EncryptionService;
exports.EncryptionService = EncryptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], EncryptionService);
//# sourceMappingURL=encryption.service.js.map