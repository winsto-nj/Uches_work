import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DbModule } from 'src/db/db.module';
import { JwtStrategy } from './jwt.strategy'; // To be created



@Module({
    imports: [
        PassportModule,
        DbModule,
        JwtModule.register({
          secret: process.env.JWT_SECRET || 'yourSecretKey', // Use env variable for better security
          signOptions: { expiresIn: '1h' }, // Token expiration time
        }),
      ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
