export type Subscriber = () => void;

export class GlobalState {
  private static instance: GlobalState;

  public states: Array<any>;
  public cursor: number;

  private subscribers: Array<Subscriber>;

  private constructor() {
    this.states = [];
    this.cursor = 0;
    this.subscribers = [];
  }

  public static getInstance(): GlobalState {
    if (!this.instance) {
      this.instance = new GlobalState();
    }

    return this.instance;
  }
 
  public subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  public notifySubscribers() {
    this.subscribers.forEach(subscriber => {
      subscriber();
    });
  }
}

export const globalState = GlobalState.getInstance();
