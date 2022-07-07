import BaseService from "./BaseService";

class AuthService {
  signIn(data) {
    return BaseService.postData(`auth/signin`, data);
  }
  user() {
    return BaseService.getData(`auth/user`);
  }
}

export default new AuthService();
