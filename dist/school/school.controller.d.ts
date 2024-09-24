import { SchoolService } from './school.service';
import { schoolDto } from 'src/school/DTO_S/school.dto';
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    create(schoolData: schoolDto): Promise<void>;
}
