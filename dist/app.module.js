"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const db_service_1 = require("./db/db.service");
const student_service_1 = require("./student/student.service");
const _user_service_1 = require("./_user/_user.service");
const admin_service_1 = require("./admin/admin.service");
const db_module_1 = require("./db/db.module");
const school_service_1 = require("./school/school.service");
const school_controller_1 = require("./school/school.controller");
const school_module_1 = require("./school/school.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, db_module_1.DbModule, school_module_1.SchoolModule],
        controllers: [app_controller_1.AppController, school_controller_1.SchoolController],
        providers: [app_service_1.AppService, db_service_1.DbService, student_service_1.StudentService, _user_service_1.UserService, admin_service_1.AdminService, school_service_1.SchoolService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map