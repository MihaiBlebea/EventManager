"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DomainEvent {
    constructor() {
        this.timestamp = new Date();
    }
    get occurredOn() {
        return this.timestamp;
    }
}
exports.DomainEvent = DomainEvent;
