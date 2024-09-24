import { Body, Controller, Post } from '@nestjs/common';
import { SchoolService } from './school.service';
import { schoolDto } from 'src/school/DTO_S/school.dto';

@Controller('school')
export class SchoolController {
    constructor(private readonly schoolService: SchoolService) {}
    @Post('create')
  async create(@Body() schoolData: schoolDto,) {
    const { name, address, userIds } = schoolData;
    return this.schoolService.create({name, address}, userIds);
    
  }

}
