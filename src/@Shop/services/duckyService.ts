import { BaseService } from "@/src/@Core/service/BaseService";

class DuckyService extends BaseService<any> {
  getLands = () => {
    const endpoint = "/api/v1/public/ducky/land";
    return this.request.get<any[]>(endpoint);
  };
}

const duckyService = new DuckyService();

export default duckyService;
