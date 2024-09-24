import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { schoolDto } from 'src/school/DTO_S/school.dto';

@Injectable()
export class SchoolService {
    constructor(private readonly prisma:DbService,
        ) {}

//the first step in adjusting the end point logic in this service is to create a new shool and associate it with the user id that is given.
    async create (schoolData: schoolDto, userIds: number[]){
        const{name, address} = schoolData;
    


    const  newSchool = await this.prisma.school.create({
        data: {
            name,
            address,

            User: {
                connect: (userIds || []).map(id => ({ id })),
              },
        },
    })
    }
    // Get all schools with associated students (users)
  async findAll() {
    return this.prisma.school.findMany({
      include: {
        User: true, // Include users associated with the school
      },
    });
  }

  // Get a single school by ID with associated students (users)
  async findOne(id: number) {
    return this.prisma.school.findUnique({
      where: { id },
      include: {
        User: true, // Include users associated with the school
      },
    });
  }

}
  
