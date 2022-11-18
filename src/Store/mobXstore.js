import { action, makeObservable, observable } from "mobx";

class Store {
  count = false;
  EndTrip = true;
  constructor() {
    makeObservable(
      this,
      {
        setCount: action,
        count: observable,
        EndTrip: observable,
      },
      { autoBind: true }
    );
  }
  setCount(data) {
    this.count = data;
  }

  setEndTrip(data) {
    this.EndTrip = data;
  }
}

export default Store = new Store();
