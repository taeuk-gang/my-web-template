import { observable, action } from 'mobx';

class Counter {
  @observable
  public count = 0;

  @action
  public increment(): void {
    this.count++;
  }
}

export default new Counter();