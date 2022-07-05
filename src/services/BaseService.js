import axios from "../utils/axios";

class BaseService {
  postData(url, data) {
    return axios.post(url, data);
  }
  getData(path) {
    return axios.get(path);
  }

  putData(path, data) {
    return axios.put(path, data);
  }
  patchData(path, data) {
    return axios.patch(path, data);
  }
  deleteData(path) {
    return axios.delete(path);
  }
}

export default new BaseService();
