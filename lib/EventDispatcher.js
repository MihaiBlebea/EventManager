"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventDispatcher {
    constructor(eventName) {
        this.callbacks = [];
        this.eventName = eventName;
        this.callbacks = [];
    }
    get name() {
        return this.eventName;
    }
    get eventCallbacks() {
        return this.callbacks;
    }
    set name(value) {
        this.eventName = value;
    }
    registerCallback(callback) {
        this.callbacks.push(callback);
    }
    unregisterCallback(callback) {
        const index = this.callbacks.indexOf(callback);
        if (index < 0) {
            throw new Error('Callback was not found in the callbacks array');
        }
        this.callbacks.splice(index, 1);
    }
    fire(data) {
        this.callbacks.forEach((callback) => {
            callback(data);
        });
    }
}
exports.EventDispatcher = EventDispatcher;
