export declare class EventDispatcher {
    private eventName;
    private callbacks;
    constructor(eventName: String);
    name: String;
    readonly eventCallbacks: Function[];
    registerCallback(callback: Function): void;
    unregisterCallback(callback: Function): void;
    fire(data: any): void;
}
