import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  searchAll() {
    const item = userRepository.getAll();
    if (!item) {
      return null;
    }
    return item;
  }

  addUser(data){
    const item = userRepository.create(data);
    return item;
  }

  removeUser(id){
    const item = userRepository.delete(id);
    return item;
  }

  updateUser(id, dataToUpdate){
    const item = userRepository.update(id, dataToUpdate);
    return item;
  }
}

const userService = new UserService();

export { userService };
