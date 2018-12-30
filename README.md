## Typescript Event Manager

### Install

Run in terminal ``` npm install event-manager-js ```

### Usage

If you are in a Node project, you could create a new file that holds all the events registered

** events.js: **
```
const { EventManager } = require('event-manager-js')

let manager = new EventManager()

// Creates a UserRegistered event
manager.on('UserRegistered', (payload)=> {
    ... // Do something with the payload
})

module.exports = manager
```

Trigger the event from some other place in your code.
```
const manager = require('./path-to-events-file/events.js')

const payload = {
    name: 'Bob',
    age: 27,
    job: developer,
    ....
}
manager.dispatch('UserRegistered', payload)
```
