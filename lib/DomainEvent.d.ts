declare type PayloadInterface = {
    occurredOn: Date;
};
export declare abstract class DomainEvent {
    protected timestamp: Date;
    constructor();
    abstract readonly payload: PayloadInterface;
    readonly occurredOn: Date;
}
export {};
