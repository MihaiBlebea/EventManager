export declare class EventManager {
    private events;
    constructor();
    dispatch(eventName: string, data: any): void;
    on(eventName: string, callback: Function): void;
    off(eventName: string, callback: Function): void;
}
