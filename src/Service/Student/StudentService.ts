import ServiceBase from "../ServiceBase";
import UriBack from "../types";
import { IStudent } from "./types";

class StudentService extends ServiceBase {
  constructor() {
    super(UriBack, "Student");
  }
  getAll = async (courseId: number): Promise<IStudent[]> => {
    const { data } = await this.client.get<IStudent[]>('', { params: { courseId: courseId } });
    return data;
  };

  post = async (data: Partial<IStudent>): Promise<{ data: any }> => {
    return await this.client.post('', data);
  };

  update = async (data: Partial<IStudent>): Promise<void> => {
    await this.client.put('', data);
  };

  delete = async (id: number): Promise<void> => {
    await this.client.delete(`/${id}`);
  };
}
const ServiceStudent = new StudentService();
export default ServiceStudent;