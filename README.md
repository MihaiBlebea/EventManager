## Typescript Event Manager

### Install

Run in terminal ``` npm install event-manager-js ```

### Usage with TypeScript

#### Step 1 - Create an event:

Start by creating a domain event class that extends the abstract class **DomainEvent**. You can do some operations in the event constructor before saving the data as attributes.

Implement payload() getter to return an object that exports all the class attributes. You have to add the "occurredOn" attribute to the returned object. "this.timestamp" is the current timestamp generated when you call the "super()" method in the class constructor.

Example:

```
import * as eventStore from 'event-manager-js'


export class UserCreated extends eventStore.DomainEvent
{
    private userId : String

    // Just pass whatever data you need in the constructor
    constructor(userId : String)
    {
        // Must call super() first thing in the constructor
        super()
        this.userId = userId
    }

    // Must be implemented from abstract DomainEvent
    get payload()
    {
        return {
            userId:     this.userId,
            occurredOn: this.timestamp // "occuredOn" must be added to the payload object
        }
    }
}
```


#### Step 2 - Create a listener:

Create a listener that does whatever action you need when the event is dispatched. Logic should be encapsulated in this class execute() method.

Example:

```
import * as eventStore from 'event-manager-js'


export class SendEmailListener implements eventStore.ListenerInterface
{
    constructor()
    {
        // Do constructor stuff in here
    }

    execute()
    {
        // Do the logic of the listener in here
    }
}
```


#### Step 3 - Register events and listeners in the EventStore:

If you are in a Node project, you could create a new file that holds the registered events and listeners in the event store. Just export the EventStore after registering and import it where you need it.

Example **events.ts** :

```
import * as store from 'event-manager-js'
import { SendEmailListener } from './path-to-listeners-folder/SendEmailListener'


let store = new store.EventStore()

let sendEmail = new SendEmailListener() // This class implements ListenerInterface

// Register listener to an Event in the EventStore
store.on('UserCreated', sendEmail)

export default store
```


#### Step 4 - Trigger the events:

Trigger the event from some other place in your code.

Example:

```
import { store } from './path-to-events-file/events.ts'
import { UserCreated } from './path-to-events-folder/UserCreated'

let userEmail = 'bob@gmail.com'
let userName = 'Bob Smith'

store.dispatch(new UserCreated(userEmail, userName))
```
