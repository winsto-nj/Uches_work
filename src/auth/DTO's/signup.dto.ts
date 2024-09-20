import { ROLE } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class signupDto{
@IsNotEmpty()
@IsString()
name: string;

@IsEmail()
@IsNotEmpty()
email: string;

@IsString()
@MinLength(8)
Password: string;

@IsNotEmpty()
role: ROLE

}