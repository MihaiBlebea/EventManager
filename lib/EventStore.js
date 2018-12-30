"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventStore {
    constructor() {
        this.events = {};
    }
    eventStored(eventName) {
        return this.events[eventName] ? true : false;
    }
    dispatch(event) {
        let eventName = event.constructor.name;
        if (!this.eventStored(eventName)) {
            throw new Error(`Event with name ${eventName} is not registered`);
        }
        this.events[eventName].map((listener) => {
            listener.execute(event.payload);
        });
    }
    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }
    off(eventName, listenerName) {
        if (!this.events[eventName]) {
            throw new Error(`Could not find event with name ${eventName}`);
        }
        this.events[eventName].map((listener, index) => {
            if (listener.constructor.name === listenerName) {
                this.events[eventName].splice(index, 1);
            }
        });
    }
}
exports.EventStore = EventStore;
