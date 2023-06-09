# app_architecture

Terminology: 
- Pattern: Design pattern in code, library-agnostic
- State management: How data is stored and accessed, dependent on library
- Architecture: Combination of patterns and state management and tools, dependent on library

## react-context-state-management

```
cd react-context-state-management
npm start
```

There are three main parts to this state management approach:
- context
- Provider
- useContext

context stores the state that will be consumed by components. 

Provider is a component that wraps the components that will consume the state stored in the context it is providing. This allows you to provide different contexts to different components in different parts of the component tree, and components nested deeply in the component tree can access context in higher levels without prop drilling.

useContext is a hook that allows components to consume the state of a context above the component in the tree. It also listens to changes in the context state, and rerenders the component when a change is detected.

### Advantages
- Stop prop drilling


### Disadvantages
- Non-explicit dependencies

### Recommended Use Cases (by React)
- Themes (e.g. light/dark mode)
- Current Account (e.g. logged in user)
- Routing (e.g. storing current route when building a router)
- Managing large app state (common to use with context with a reducer)

## react-repository-pattern

Based on [Medium article](https://medium.com/@JeffyJeff/a-step-by-step-guide-to-abstraction-with-a-generic-repository-pattern-typescript-and-react-990b579c10b8)

```
cd react-repository-pattern
npm start
```

This architectural approach uses two layers: 
- Data layer
- View layer

### Data Layer
The data layer has two repositories:
- BaseRepository 
  - extends HttpClient 
  - implements IBaseRepository
- UserRepository 
  - extends BaseRepository

HttpClient is a wrapper around an arbitrary library that makes HTTP requests. In this case, it uses axios. This class contains implementation details needed for authentication, error handling, etc. IBaseRepository is an interface that defines the methods that need to be implemented, e.g. get, post, put, delete. BaseRepository extends HttpClient in order to access the HTTP methods, and implements IBaseRepository to define how the methods are implemented. The design pattern `FooRepository implements IFooRepository` is known as the repository pattern and separates "what needs to be done" from "how it will be done". This allows different implementations like `TestBaseRepository implements IBaseRepository`.

Another benefit of separating the data layer from the view layer is repositories can extend other repositories, in this case `UserRepository extends BaseRepository`. This allows UserRepository to utilise the CRUD operations in the BaseRepository, which would not be as straightforward if the CRUD operations were defined in the view or view models.

### View Layer
The view layer calls directly from the repositories to get the data.

### Advantages 
- Separation of concerns between data and view layers allow for easier testing, maintenance and extending

### Disadvantages
- Boilerplate




#### Creating new examples
- React

```
npm install -g create-react-app
npx create-react-app my-app --template typescript
```