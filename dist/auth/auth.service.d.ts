import { signupDto } from './DTO\'s/signup.dto';
import { DbService } from 'src/db/db.service';
import { loginDto } from './DTO\'s/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: DbService, jwtService: JwtService);
    signUp(signupData: signupDto): Promise<{
        message: string;
    }>;
    login(loginData: loginDto): Promise<{
        access_token: string;
    }>;
    generateToken(user: any): {
        access_token: string;
    };
}
