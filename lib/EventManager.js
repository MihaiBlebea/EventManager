"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventDispatcher_js_1 = require("./EventDispatcher.js");
class EventManager {
    constructor() {
        this.events = {};
    }
    dispatch(eventName, data) {
        const event = this.events[eventName];
        if (event) {
            event.fire(data);
        }
    }
    on(eventName, callback) {
        let event = this.events[eventName];
        if (!event) {
            event = new EventDispatcher_js_1.EventDispatcher(eventName);
            this.events[eventName] = event;
        }
        event.registerCallback(callback);
    }
    off(eventName, callback) {
        const event = this.events[eventName];
        if (event && event.eventCallbacks.indexOf(callback) > -1) {
            event.unregisterCallback(callback);
            if (event.eventCallbacks.length === 0) {
                delete this.events[eventName];
            }
        }
        else {
            throw new Error(`Could not find an event with name ${eventName}`);
        }
    }
}
exports.EventManager = EventManager;
