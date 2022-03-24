import { extendObservable } from "mobx";

/**
 * Userstore
 */
class UserStore {
  constructor() {
    extendObservable(this, {
      isLoggedIn: false,
      owner_id: "",
      store_id: "",
      username: "",
    });
  }
}
export default new UserStore();
