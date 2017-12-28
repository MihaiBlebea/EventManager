
class EventDispatcher()
{
    constructor(eventName)
    {
        this.eventName = eventName;
        this.callbacks = [];
    }

    registerCallback(callback)
    {
        this.callbacks.push(callback);
    }

    unregisterCallback(callback)
    {
        const index = this.callbacks.indexOf(callback);
        if(index > -1)
        {
            this.callbacks.splice(index, 1);
        }
    }

    fire(data)
    {
        this.callbacks.forEach((callback)=> {
            callback(data);
        })
    }
}

export default EventDispatcher;
