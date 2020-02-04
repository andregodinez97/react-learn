Notes:

### Building content with JSX

- A component is a Function or Class

  - that produces HTML to show to the User (JSX)
  - Handles feedback from the user (Using Event Handlers)

- Can't insert object to reference inside jsx

  - exceptions for style

- HTML vs JSX
  - class - className
  - for - htmlFor

## Communicating with Props

### Three Tenets of Components

- Component Nesting
  - Component can be shown inside of another
- Component Reusability
  - Easily reused through out the application
- Component Configuration
  - Configure component when it is created

## Props system - Properites

- Passing from parent component to child.
- 2 Stages
  - Provide information from parent to child
  - Child configures the prop

## Class Based Components

- Functional vs Class Based Components
- Class Based pros
  - Easier code organization
  - State
  - Lifecycle hooks
  - input
  - Rules of Class components
    - Must be a JS Class
    - Extend React.Component
    - Must define a render method that returns some amount of JSX

# Rules of State

- Only used in class components
  - hooks with functional components
- State is an object
  - contains data relevant to component
- updating state on a component causes to render
- must be init when component is created
- updated with
  - setState function
  - only directly set state on init i.e. this.state. ....
