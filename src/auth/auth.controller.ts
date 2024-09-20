import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signupDto } from './DTO\'s/signup.dto';
import { loginDto } from './DTO\'s/login.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authservice:AuthService){}

@Post('signup')
async signUp(@Body() signupData: signupDto){
return this.authservice.signUp(signupData);}

@Post('login')
async login(@Body() loginData: loginDto){
    return this.authservice.login(loginData);
}










}
