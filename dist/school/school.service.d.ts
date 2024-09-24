import { DbService } from 'src/db/db.service';
import { schoolDto } from 'src/school/DTO_S/school.dto';
export declare class SchoolService {
    private readonly prisma;
    constructor(prisma: DbService);
    create(schoolData: schoolDto, userIds: number[]): Promise<void>;
    findAll(): Promise<({
        User: {
            id: number;
            name: string;
            Password: string;
            email: string;
            role: import(".prisma/client").$Enums.ROLE;
            school_Id: number | null;
        }[];
    } & {
        id: number;
        name: string;
        address: string;
    })[]>;
    findOne(id: number): Promise<{
        User: {
            id: number;
            name: string;
            Password: string;
            email: string;
            role: import(".prisma/client").$Enums.ROLE;
            school_Id: number | null;
        }[];
    } & {
        id: number;
        name: string;
        address: string;
    }>;
}
