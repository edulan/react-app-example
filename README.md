# React application example
This is an example of a desktop application using Electron, React and MobX.

This project is based on create-react-app, but has been ejected and further configured to suite its special needs.

## Usage
Start dev server
```
npm run build:watch
```

Start electron application (development mode)
```
npm start
```

Run tests
```
npm test
```

## Application

### Folder structure
* config
* src
  * components
  * stores
  * services
  * queries
  * index.js (react app entry point)
* test
* index.js (electron app)

### Architecture
This applications follows MobX conventions, in which everything is based on state and changes in the UI are reactions to state changes.

Components only receive stores via props and interact with the external world via those stores. Stores are globally available for components via a `Provider`.

Stores exposes a simple API to abstract components from outside world. Stores uses services to perform all actions that mutate state.

Services are responsible of retrieving/sending current state from/to persistance layer. Queries functions are used to communicate with persistance engine.

Queries encapsulates persistance specific domain language. They are kind of adapter.

### Bootstrap
Bootstrap process is responsible of setting up all the needed engines for application to start. Currently there are 2 main ones:

* Prepare DB migrations
* Initialize routing

### DB
IndexedDB is used as persistance engine. Dexie is the wrapper around it that the application uses to commmunitcate with DB storage.

### Routing
Based on state

### Authentication
Uses hashed passwords

### I18n
In progress. Evaluating react-intl

### Tests
Uses Electron and Mocha for testing. Enzyme is the framework election for testing components
