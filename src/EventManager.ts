import { EventDispatcher } from './EventDispatcher.js'

type EventStore = { [ key : string ] : EventDispatcher }


export class EventManager
{
    private events : EventStore

    constructor()
    {
        this.events = {}
    }

    dispatch(eventName : string, data : any)
    {
        const event = this.events[eventName]
        if(event)
        {
            event.fire(data);
        }
    }

    on(eventName : string, callback : Function)
    {
        let event = this.events[eventName]
        if(!event)
        {
            event = new EventDispatcher(eventName)
            this.events[eventName] = event
        }
        event.registerCallback(callback)
    }

    off(eventName : string, callback : Function)
    {
        const event = this.events[eventName]
        if(event && event.eventCallbacks.indexOf(callback) > -1)
        {
            event.unregisterCallback(callback)
            if(event.eventCallbacks.length === 0)
            {
                delete this.events[eventName]
            }
        } else {
            throw new Error(`Could not find an event with name ${ eventName }`)
        }
    }
}
