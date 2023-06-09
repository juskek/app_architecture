

## app_architecture




- [app\_architecture](#app_architecture)
- [Terminology](#terminology)
- [react-context-state-management](#react-context-state-management)
  - [Advantages](#advantages)
  - [Disadvantages](#disadvantages)
  - [Recommended Use Cases (by React)](#recommended-use-cases-by-react)
- [react-redux-state-management](#react-redux-state-management)
  - [Advantages](#advantages-1)
  - [Disadvantages](#disadvantages-1)
- [react-repository-pattern](#react-repository-pattern)
  - [Data Layer](#data-layer)
  - [View Layer](#view-layer)
  - [Advantages](#advantages-2)
  - [Disadvantages](#disadvantages-2)
    - [Creating new examples](#creating-new-examples)


## Terminology

- Pattern: Design pattern in code, library-agnostic
- State management: How data is stored and accessed, dependent on library
- Architecture: Combination of patterns and state management and tools, dependent on library
- Prop Injection (React): Passing props down through (functional) components
- Constructor Injection: Passing dependencies when an object is created
- Dependency Injection: Method where one object (usually the DI container) automatically supplies implementations of an interface that another object depends on 
- Inversion of Control: "don't call us, we'll call you". E.g. IoC container like Redux calls component to render when state changes, instead of component calling Redux to get state
- IoC Container: aka DI Container. Container is used to supply dependencies to objects.

e.g.
```
var svc = new ShippingService(new ProductLocator(), 
   new PricingService(), new InventoryService(), 
   new TrackingRepository(new ConfigProvider()), 
   new Logger(new EmailLogger(new ConfigProvider())));

var svc = IoC.Resolve<IShippingService>();
```

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
- Non-explicit dependencies: Using a component that consumes a context will require a Provider of that context to be in the component tree. This is not explicit, and can be difficult to debug.

### Recommended Use Cases (by React)
- Themes (e.g. light/dark mode)
- Current Account (e.g. logged in user)
- Routing (e.g. storing current route when building a router)
- Managing large app state (common to use with context with a reducer)

## react-redux-state-management

```
cd react-context-state-management
yarn start
```

There are __ components in the Redux framework
1. Reducing function
2. Store
3. Selector
4. Dispatch

The reducing function accepts an object to store state, and an action to update the state. The reducing function is a pure function, which means it does not mutate the state, but returns a new state object. 

The store is provided at the root of the app, making it accessible to all child components. The reducing function is passed to the store, which is a container for the state. It provides access to selector and dispatch methods, which are used to access and update the state.

Selector is a function that allows you to select a specific object in the state that you want the React component to listen to. When that state changes, the Redux framework will rerender the component.

Dispatch is a method that allows you to update the state. It accepts an action, which is an object that contains the type of action. The reducing function will then update the state based on the action.

### Advantages
- Stop prop drilling
- Reducing function 
- Non-explicit dependencies: Redux store is available to all child components since it is a singleton and exists at the root of the app.
### Disadvantages
- Boilerplate
- Non-explicit dependencies: Testing individual components requires mocking the Redux store, which is not explicit.



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