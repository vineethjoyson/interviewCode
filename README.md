# interviewCode

🔹 1. Core Concepts

Execution Context & Call Stack → how JS code runs step by step.

Hoisting → what happens with var, let, const, and function declarations.

Closures → function + lexical scope (classic interview topic).

Scopes → global, function, block scope, var vs let vs const.

this keyword → how this changes in functions, objects, classes, arrow functions.

garbage clloctor

🔹 2. Asynchronous JS

Event Loop → call stack, microtasks vs macrotasks, Node.js phases.

Promises → states, chaining, error handling.

async/await → syntax, error handling with try/catch, sequential vs parallel execution.

Callbacks vs Promises vs async/await → when to use each.

process.nextTick vs Promise vs setTimeout in Node.js.

🔹 3. Objects & Functions

Prototypes & Inheritance → prototype chain, Object.create, class syntax.

Higher-order functions → map, filter, reduce.

Pure functions & immutability → functional programming basics.

Currying & Partial Application → common in interviews.

Immediately Invoked Function Expressions (IIFE).

🔹 4. Advanced Topics

Event delegation → bubbling, capturing.

Debounce & Throttle → performance patterns.

Modules → CommonJS (require) vs ES Modules (import/export).

Error handling → try/catch/finally, custom errors.

Memory leaks in JS → closures, event listeners, timers.

🔹 5. ES6+ Features

Destructuring → arrays, objects.

Rest & Spread operators.

Template literals.

Default parameters.

Optional chaining (?.) & Nullish coalescing (??).

Generators & Iterators → function*, yield.

Symbol & WeakMap/WeakSet.

🔹 6. Data Structures in JS

Array methods → map, reduce, forEach, find, some, every.

Set & Map → differences vs arrays/objects.

WeakMap & WeakSet → memory management.

🔹 7. DOM & Browser APIs (if full-stack role)

DOM manipulation → querySelector, append, remove.

Event handling → addEventListener, event bubbling/capturing.

LocalStorage vs SessionStorage vs Cookies.

fetch API & XMLHttpRequest.

🔹 8. Node.js-Specific

Event Loop phases in Node.

process.nextTick vs setImmediate.

Modules in Node (CommonJS vs ESM).

Streams & Buffers.

Cluster & Worker Threads.

libuv & thread pool.

✅ If you’re short on time, focus priority should be:

Closures & Scope

this keyword

Event Loop (JS + Node.js)

Promises / async/await

Prototypes & Inheritance

Array methods (map, reduce, etc.)

ES6+ must-know features


🔑 React Core Concepts
1. Components

Functional Components (most common now, with hooks).

Class Components (legacy, but still asked).
👉 Interviewer may ask: “How are class components different from functional components?”

2. JSX

JavaScript + XML → syntactic sugar for React.createElement.

Must return one root element.

3. Props & State

Props → inputs to components, read-only.

State → managed inside component, can change over time.
👉 “What’s the difference between props and state?”

4. Virtual DOM & Reconciliation

React maintains a virtual DOM.

Compares with real DOM using diffing algorithm.

Updates only what changes → efficient rendering.

5. Hooks (very common questions)

useState → state in functional components.

useEffect → side effects (API calls, subscriptions).

useContext → global state via context.

useMemo / useCallback → performance optimization.
👉 Be ready to explain dependency array in useEffect.

6. Component Lifecycle

Class Components: componentDidMount, componentDidUpdate, componentWillUnmount.

Functional Hooks Equivalent: useEffect with/without dependency array.

7. Conditional Rendering

Ternary (condition ? A : B), && operator, or separate functions.

8. Lists & Keys

Using .map() to render lists.

Keys help React identify elements → important for reconciliation.

9. Forms

Controlled vs Uncontrolled components.
👉 “Why prefer controlled components?”

10. Lifting State Up

Move state to the nearest common ancestor to share data.

11. Context API

Avoids prop drilling.

createContext + useContext.

12. React Router

SPA navigation without page reload.

<BrowserRouter>, <Routes>, <Route>.

13. Performance Optimization

Memoization: React.memo, useCallback, useMemo.

Lazy Loading: React.lazy, Suspense.

14. Error Boundaries

Special components that catch JS errors in children.

15. React + Async

Fetching data → useEffect + fetch/Axios.

Suspense for Data Fetching (new React feature).
