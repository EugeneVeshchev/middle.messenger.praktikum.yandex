type Callback<T extends any = any> = (...args: T[]) => void;
type Listeners = Record<string, Callback[]>;

export default class EventBus {
    listeners: Listeners = {};

    on(eventName: string, callback: Callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(callback);
    }

    off(event: string, callback: Callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event: string, ...args: Parameters<Callback>) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((listener) => {
            listener(...args);
        });
    }
}
