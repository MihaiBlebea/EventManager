
export class EventDispatcher
{
    private eventName : String

    private callbacks : Function[] = []

    constructor(eventName : String)
    {
        this.eventName = eventName
        this.callbacks = []
    }

    get name()
    {
        return this.eventName
    }

    get eventCallbacks()
    {
        return this.callbacks
    }

    set name(value : String)
    {
        this.eventName = value
    }

    registerCallback(callback : Function)
    {
        this.callbacks.push(callback)
    }

    unregisterCallback(callback : Function)
    {
        const index = this.callbacks.indexOf(callback)
        if(index < 0)
        {
            throw new Error('Callback was not found in the callbacks array')
        }
        this.callbacks.splice(index, 1)
    }

    fire(data : any)
    {
        this.callbacks.forEach((callback)=> {
            callback(data)
        })
    }
}
