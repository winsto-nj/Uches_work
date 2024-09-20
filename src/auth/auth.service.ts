import { Injectable } from '@nestjs/common';
import { signupDto } from './DTO\'s/signup.dto';
import { DbService } from 'src/db/db.service';
import * as bcrypt from 'bcrypt';
import { loginDto } from './DTO\'s/login.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private prisma: DbService,
        private jwtService: JwtService,
        ){}

    async signUp(signupData: signupDto) {
        const { email, Password, name, role } = signupData;

        const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

        const user = await this.prisma.user.create({
            data: {
                email,
                Password: hashedPassword,
                name,
                role,
              },

        });
        return {message: "User Signed Up Successfully!"};
    }

    async login(loginData: loginDto){
        const {email, Password} = loginData;

        const user = await this.prisma.user.findUnique({
            where: { email },
          });
      
          if (!user || !(await bcrypt.compare(Password, user.Password))) {
            throw new Error('Invalid credentials');
          }
        
         return this.generateToken(user);

    }
    generateToken(user: any) {const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload), // Sign the payload to generate JWT
    };
  }

}
