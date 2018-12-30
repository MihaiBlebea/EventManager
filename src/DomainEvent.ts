
type PayloadInterface = { occurredOn: Date }

export abstract class DomainEvent
{
    protected timestamp : Date

    constructor()
    {
        this.timestamp = new Date()
    }

    abstract get payload() : PayloadInterface

    get occurredOn()
    {
        return this.timestamp
    }
}
