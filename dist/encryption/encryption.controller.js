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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionController = void 0;
const common_1 = require("@nestjs/common");
const encryption_service_1 = require("./encryption.service");
let EncryptionController = class EncryptionController {
    constructor(encryptionservice) {
        this.encryptionservice = encryptionservice;
    }
    async generateKeys(schoolId) {
        try {
            const id = Number(schoolId);
            if (isNaN(id)) {
                throw new Error('Invalid school ID');
            }
            const result = await this.encryptionservice.storeKeys(id);
            return { message: 'Encryption keys generated successfully', result };
        }
        catch (error) {
            console.error('Error generating keys:', error);
            return {
                statusCode: 500,
                message: 'Internal server error',
                error: error.message,
            };
        }
    }
};
exports.EncryptionController = EncryptionController;
__decorate([
    (0, common_1.Post)('create/:schoolId'),
    __param(0, (0, common_1.Param)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EncryptionController.prototype, "generateKeys", null);
exports.EncryptionController = EncryptionController = __decorate([
    (0, common_1.Controller)('encryption'),
    __metadata("design:paramtypes", [encryption_service_1.EncryptionService])
], EncryptionController);
//# sourceMappingURL=encryption.controller.js.map