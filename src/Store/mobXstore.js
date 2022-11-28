import { action, makeObservable, observable } from "mobx";

class Store {
  count = false;
  EndTrip = true;
  note = [];
  constructor() {
    makeObservable(
      this,
      {
        note: observable,
        count: observable,
        EndTrip: observable,
        setCount: action,
        setNote: action,
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
  setNote(data) {
    var arr = [...this.note];
    arr.push(data);

    this.note = arr;
    console.log("first", data);
  }
}

export default Store = new Store();
