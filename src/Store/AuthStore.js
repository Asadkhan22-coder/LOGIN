import { action, makeObservable, observable } from "mobx";

class AuthStore {
  Username = "";
  Password = "";
  Mail = "";
  Repeat = "";

  constructor() {
    makeObservable(this, {
      Username: observable,
      Password: observable,
      Mail: observable,
      Repeat: observable,
      setUsername: action,
      setPassword: action,
      setMail: action,
      setRepeat: action,
    });
  }
  setUsername(data) {
    this.Username = data;
  }
  setPassword(data) {
    this.Password = data;
  }
  setMail(data) {
    this.Mail = data;
  }
  setRepeat(data) {
    this.Repeat = data;
  }
}

export default AuthStore = new AuthStore();
