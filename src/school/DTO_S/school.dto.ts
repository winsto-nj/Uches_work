import { IsNotEmpty, IsString } from "class-validator";

export class schoolDto{

    @IsNotEmpty()
    @IsString()
    name: string;


    @IsString()
    @IsNotEmpty()
    address: string;


    userIds?:number[];

}