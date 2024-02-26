import ServiceBase from "../ServiceBase";
import UriBack from "../types";
import { IStudentCourse } from "./types";

class StudentCourseService extends ServiceBase {
    constructor() {
        super(UriBack, "StudentCourse");
    }
    getAll = async (): Promise<IStudentCourse[]> => {
        const { data } = await this.client.get<IStudentCourse[]>('');
        return data;
    };

    post = async (data: Partial<IStudentCourse>): Promise<void> => {
        await this.client.post('', data);
    };

    update = async (data: Partial<IStudentCourse>): Promise<void> => {
        await this.client.put('', data);
    };

    delete = async (id: number): Promise<void> => {
        await this.client.delete(`/${id}`);
    };
}
const ServiceStudentCourse = new StudentCourseService();
export default ServiceStudentCourse;