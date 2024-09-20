import { AuthService } from './auth.service';
import { signupDto } from './DTO\'s/signup.dto';
import { loginDto } from './DTO\'s/login.dto';
export declare class AuthController {
    private readonly authservice;
    constructor(authservice: AuthService);
    signUp(signupData: signupDto): Promise<{
        message: string;
    }>;
    login(loginData: loginDto): Promise<{
        access_token: string;
    }>;
}
