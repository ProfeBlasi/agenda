import ServiceBase from "../ServiceBase";
import UriBack from "../types";
import { ICourse } from "./types";

class CourseService extends ServiceBase {
  constructor() {
    super(UriBack, "Course");
  }
  getAll = async (): Promise<ICourse[]> => {
    const { data } = await this.client.get<ICourse[]>('');
    return data;
  };

  delete = async (id: number): Promise<void> => {
    await this.client.delete(`/${id}`);
  };
}
const ServiceCourse = new CourseService();
export default ServiceCourse;