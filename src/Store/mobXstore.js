import { action, makeObservable, observable } from "mobx";

class Store {
  count = false;
  constructor() {
    makeObservable(
      this,
      {
        setCount: action,
        count: observable,
      },
      { autoBind: true }
    );
  }
  setCount(data) {
    this.count = data;
  }
}

export default Store = new Store();
