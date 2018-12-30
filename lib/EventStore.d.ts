import { DomainEvent } from './DomainEvent';
import { ListenerInterface } from './ListenerInterface';
export declare class EventStore {
    private events;
    constructor();
    private eventStored;
    dispatch(event: DomainEvent): void;
    on(eventName: string, listener: ListenerInterface): void;
    off(eventName: string, listenerName: String): void;
}
