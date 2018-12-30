import { DomainEvent } from './DomainEvent'
import { ListenerInterface } from './ListenerInterface'


type Store = { [ key : string ] : ListenerInterface[] }


export class EventStore
{
    private events : Store

    constructor()
    {
        this.events = {}
    }

    private eventStored(eventName : string) : Boolean
    {
        return this.events[eventName] ? true : false
    }

    dispatch(event : DomainEvent) : void
    {
        let eventName = event.constructor.name
        if(!this.eventStored(eventName))
        {
            throw new Error(`Event with name ${ eventName } is not registered`)
        }

        this.events[eventName].map((listener)=> {
            listener.execute(event.payload)
        })
    }

    on(eventName : string, listener : ListenerInterface)
    {
        if(!this.events[eventName])
        {
            this.events[eventName] = []
        }
        this.events[eventName].push(listener)
    }

    off(eventName : string, listenerName : String)
    {
        if(!this.events[eventName])
        {
            throw new Error(`Could not find event with name ${ eventName }`)
        }
        this.events[eventName].map((listener, index)=> {
            if(listener.constructor.name === listenerName)
            {
                this.events[eventName].splice(index, 1)
            }
        })
    }
}
