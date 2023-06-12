This repository contains examples of different app architectures, to understand the pros and cons of each approach, and when to use them. The objective of app architecture is to make code more maintainable, testable, and scalable.


- [1. Terminology](#1-terminology)
- [2. State Management](#2-state-management)
  - [2.1. react-context-state-management](#21-react-context-state-management)
  - [2.2. react-redux-state-management](#22-react-redux-state-management)
- [3. Design Patterns](#3-design-patterns)
  - [3.1. react-repository-pattern](#31-react-repository-pattern)
  - [3.2. react-inversify-dependency-injection](#32-react-inversify-dependency-injection)
- [Testing](#testing)
  - [react-testing-library](#react-testing-library)


## 1. Terminology

- Pattern: Design pattern in code, library-agnostic
- State management: How data is stored and accessed, dependent on library
- Architecture: Combination of patterns and state management and tools, dependent on library
- Prop Injection (React): Passing props down through (functional) components
- Constructor Injection: Passing dependencies when an object is created
- Dependency Injection: Approach where one object (usually the DI container) automatically supplies implementations of an interface that another object depends on 
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
## 2. State Management
### 2.1. react-context-state-management

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

**Advantages**
- Stop prop drilling


**Disadvantages**
- Non-explicit dependencies: Using a component that consumes a context will require a Provider of that context to be in the component tree. This is not explicit, and can be difficult to debug.

**Recommended Use Cases (by React)**
- Themes (e.g. light/dark mode)
- Current Account (e.g. logged in user)
- Routing (e.g. storing current route when building a router)
- Managing large app state (common to use with context with a reducer)

### 2.2. react-redux-state-management

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

**Advantages**
- Stop prop drilling
- Reducing function 
- Non-explicit dependencies: Redux store is available to all child components since it is a singleton and exists at the root of the app.

**Disadvantages**
- Boilerplate
- Non-explicit dependencies: Testing individual components requires mocking the Redux store, which is not explicit.
- Imagine a 4000 line store file

**Recommended Use Cases [(by Redux)](https://redux.js.org/faq/general#when-should-i-use-redux)**

"don't use Redux until you have problems with vanilla React"

Redux is most useful in cases when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people
- You need to see how that state is being updated over time



## 3. Design Patterns
### 3.1. react-repository-pattern

Based on [Medium article](https://medium.com/@JeffyJeff/a-step-by-step-guide-to-abstraction-with-a-generic-repository-pattern-typescript-and-react-990b579c10b8)

```
cd react-repository-pattern
npm start
```

This architectural approach uses two layers: 
- Data layer
- View layer

**Data Layer**
The data layer has two repositories:
- BaseRepository 
  - extends HttpClient 
  - implements IBaseRepository
- UserRepository 
  - extends BaseRepository

HttpClient is a wrapper around an arbitrary library that makes HTTP requests. In this case, it uses axios. This class contains implementation details needed for authentication, error handling, etc. IBaseRepository is an interface that defines the methods that need to be implemented, e.g. get, post, put, delete. BaseRepository extends HttpClient in order to access the HTTP methods, and implements IBaseRepository to define how the methods are implemented. The design pattern `FooRepository implements IFooRepository` is known as the repository pattern and separates "what needs to be done" from "how it will be done". This allows different implementations like `TestBaseRepository implements IBaseRepository`.

Another benefit of separating the data layer from the view layer is repositories can extend other repositories, in this case `UserRepository extends BaseRepository`. This allows UserRepository to utilise the CRUD operations in the BaseRepository, which would not be as straightforward if the CRUD operations were defined in the view or view models.

**View Layer**
The view layer calls directly from the repositories to get the data.

**Advantages**
- Separation of concerns between data and view layers allow for easier testing, maintenance and extending
  - E.g Loose coupling between data and view layers, repositories can be swapped out for other implementations

**Disadvantages**
- Boilerplate



### 3.2. react-inversify-dependency-injection

```
npm start

// Change env in IOCContainer.tsx to see dependency injection in action
```

Inversify uses dependency injection to inject dependencies into components automatically. There are four main components in this framework:
- interface
- @injectable
- Container
- get()

Typescript interfaces are used to define what the dependency can do. This allows different implementations to be used, as long as they implement the interface.

@injectable is a decorator that is used to define the class as a dependency. This allows the class to be injected into other classes.

Container is a class that is used to store dependencies. It is a singleton, so there is only one instance of the container.

get() is a method that is used to get the dependency from the container. It accepts the interface as an argument, and returns the dependency that implements the interface.

In this example, the repository pattern is used to demonstrate the basic idea behind dependency injection.

- IUserRepository is the interface that defines the methods that need to be implemented
- UserRepository implements IUserRepository and gets the data from data source 1
- AltUserRepository implements IUserRepository and gets the data from data source 2
- IUserRepository is injected into App.tsx and the implementation of IUserRepository is determined by the environment variable in IOCContainer.tsx

This allows the data source to be changed without changing the code in App.tsx. This is useful when testing, as the data source can be mocked.

**Advantages**
- Automatic injection of dependencies using inversify

**Disadvantages**
- Boilerplate
- Bundle size increases
## Testing

There are four main types of testing:
- Unit testing: Testing individual functions or classes
- Component testing: Testing interaction and rendering of UI components
- Integration testing: Testing functionality between frontend and backend, or between different components of the app.
- End-to-end testing: Testing from the end user's perspective

### react-testing-library

create-react-app comes shipped with `react-testing-library`, which uses Jest as the test runner and comes with tools for unit, integration, and end-to-end testing

```
npm test
```

In this example, a unit test for the function sum() and a component test to check if a link is rendered is shown in `sum.test.ts` and `App.test.tsx` respectively.



**Creating new examples**
- React

```
npx create-react-app my-app --template typescript
```
- React Native

```
expo init my-app
```

- Flutter

```
flutter create my_app
```