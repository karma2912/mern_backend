const quest = [
    {
      "Qid": 1,
      "Question": "How does the `::part` pseudo-element work in CSS Shadow DOM?",
      "Answers": {
        "answer_a": "It allows styling of shadow DOM elements by exposing them to the main document.",
        "answer_b": "It targets the part of a shadow DOM that is slotted into the light DOM.",
        "answer_c": "It applies styles to the entire shadow tree of a web component.",
        "answer_d": "It is used to define default styles for a shadow DOM element."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 2,
      "Question": "What is the purpose of the `ShadowRoot` constructor in JavaScript?",
      "Answers": {
        "answer_a": "To create a shadow root that encapsulates part of the DOM from the main document.",
        "answer_b": "To access the root element of the shadow DOM for manipulation.",
        "answer_c": "To define a new scope for CSS variables in a shadow DOM.",
        "answer_d": "To provide an interface for interacting with external shadow DOMs."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 3,
      "Question": "In PHP, what is the purpose of the `PDO::ATTR_ERRMODE` attribute?",
      "Answers": {
        "answer_a": "It sets the error reporting mode for PDO operations, such as exceptions or warnings.",
        "answer_b": "It specifies the fetch mode for the results of PDO queries.",
        "answer_c": "It defines the character encoding used by the PDO connection.",
        "answer_d": "It controls whether PDO should use persistent connections."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 4,
      "Question": "How does the `IntersectionObserver` API work in JavaScript?",
      "Answers": {
        "answer_a": "It allows you to asynchronously observe changes in the intersection of an element with its ancestor elements or the viewport.",
        "answer_b": "It provides a way to observe changes in an element's size and position relative to the viewport.",
        "answer_c": "It detects when an element enters or leaves a specific scroll position.",
        "answer_d": "It monitors the visibility of elements within a specific container."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 5,
      "Question": "What is the `:host` pseudo-class used for in CSS Shadow DOM?",
      "Answers": {
        "answer_a": "It targets the shadow host element that contains the shadow DOM.",
        "answer_b": "It applies styles to the shadow DOM itself.",
        "answer_c": "It defines styles for elements slotted into the shadow DOM.",
        "answer_d": "It specifies styles for the root element inside a shadow DOM."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 6,
      "Question": "In Node.js, what does the `process.nextTick()` function do?",
      "Answers": {
        "answer_a": "It schedules a callback to be invoked in the next iteration of the event loop before any I/O tasks.",
        "answer_b": "It defers the execution of a callback until the next tick of the event loop.",
        "answer_c": "It schedules a callback to be executed at the end of the current event loop phase.",
        "answer_d": "It delays the execution of a callback until all pending I/O operations are completed."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 7,
      "Question": "What is the function of `Array.prototype.flat()` in JavaScript?",
      "Answers": {
        "answer_a": "It creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
        "answer_b": "It flattens an array by removing all nested elements and converting them into a single-level array.",
        "answer_c": "It sorts the array elements in a flat, one-dimensional order.",
        "answer_d": "It removes duplicates from a multi-dimensional array."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 8,
      "Question": "How can you use `CSS Grid` to create a masonry layout?",
      "Answers": {
        "answer_a": "By using the `grid-auto-rows` property combined with grid items that span multiple rows.",
        "answer_b": "By setting a fixed height on grid items and using the `grid-template-rows` property to control row sizes.",
        "answer_c": "By defining rows with `grid-template-rows` and allowing items to overlap with `grid-row` properties.",
        "answer_d": "By applying the `grid-auto-flow: dense` property to optimize the placement of grid items."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 9,
      "Question": "What does the `object-fit` property do in CSS?",
      "Answers": {
        "answer_a": "It specifies how the content of a replaced element should fit within its box.",
        "answer_b": "It defines how an element's background should be sized and positioned.",
        "answer_c": "It adjusts the fit of an element relative to its parent container.",
        "answer_d": "It controls the aspect ratio of an element's width and height."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 10,
      "Question": "In JavaScript, what does the `Reflect` API provide?",
      "Answers": {
        "answer_a": "It provides methods for intercepting and manipulating operations on objects.",
        "answer_b": "It offers utilities for creating and managing prototypes and inheritance.",
        "answer_c": "It facilitates the reflective inspection of object properties and their descriptors.",
        "answer_d": "It enables the dynamic creation of functions and their contexts."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 11,
      "Question": "What is the role of the `cache-control` header in HTTP?",
      "Answers": {
        "answer_a": "It defines caching policies for HTTP responses to control how and for how long responses should be cached.",
        "answer_b": "It specifies the type of cache storage to use for HTTP responses.",
        "answer_c": "It indicates whether the response should be stored in the server cache.",
        "answer_d": "It manages the validation and revalidation of cached responses."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 12,
      "Question": "In PHP, what does the `spl_autoload_register()` function do?",
      "Answers": {
        "answer_a": "It registers a callback function that will be invoked when a class is not found.",
        "answer_b": "It sets up automatic loading of PHP files based on class names.",
        "answer_c": "It manages the order of class file inclusion during runtime.",
        "answer_d": "It configures autoloading settings for external libraries."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 13,
      "Question": "How can you handle errors in asynchronous Node.js code?",
      "Answers": {
        "answer_a": "By using `try/catch` blocks within `async` functions or handling promise rejections with `.catch()`.",
        "answer_b": "By checking for error codes returned from callback functions.",
        "answer_c": "By implementing global error handlers for all asynchronous operations.",
        "answer_d": "By wrapping asynchronous calls in synchronous `try/catch` statements."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 14,
      "Question": "In CSS, what does the `contain` property do?",
      "Answers": {
        "answer_a": "It allows the browser to optimize performance by limiting the scope of a component's layout, paint, and size calculations.",
        "answer_b": "It defines how elements should be contained within their parent element.",
        "answer_c": "It specifies the containment strategy for responsive design.",
        "answer_d": "It ensures that elements within a container are fully visible and do not overflow."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 15,
      "Question": "What is the purpose of `async_hooks` in Node.js?",
      "Answers": {
        "answer_a": "It provides a way to track and manage asynchronous resources and their lifecycle in Node.js applications.",
        "answer_b": "It allows the creation of asynchronous tasks with custom hooks for execution control.",
        "answer_c": "It helps in debugging asynchronous operations by logging their execution context.",
        "answer_d": "It provides utilities for handling concurrency and thread management."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 16,
      "Question": "What is the role of `CSS Variables` in modern web development?",
      "Answers": {
        "answer_a": "They allow for the reuse and dynamic updating of values throughout a stylesheet.",
        "answer_b": "They define fixed values that cannot be overridden by other styles.",
        "answer_c": "They enable the application of conditional styles based on screen size.",
        "answer_d": "They control the inheritance of styles between different elements."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 17,
      "Question": "In PHP, what is the difference between `require` and `include`?",
      "Answers": {
        "answer_a": "`require` causes a fatal error if the file is not found, while `include` only produces a warning.",
        "answer_b": "`require` includes the file only once, while `include` can include the file multiple times.",
        "answer_c": "`require` handles relative paths differently from `include`.",
        "answer_d": "`require` is used for functions, while `include` is used for classes."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 18,
      "Question": "How can you use `Web Workers` in JavaScript to handle intensive computations?",
      "Answers": {
        "answer_a": "By offloading computationally heavy tasks to background threads using Web Workers, which run in parallel.",
        "answer_b": "By executing synchronous computations on the main thread to avoid performance bottlenecks.",
        "answer_c": "By splitting tasks into smaller asynchronous operations and managing them with Promises.",
        "answer_d": "By using service workers to cache data and manage network requests."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 19,
      "Question": "What is the significance of the `:not()` pseudo-class in CSS?",
      "Answers": {
        "answer_a": "It selects elements that do not match a given selector.",
        "answer_b": "It applies styles to the first element in a group of siblings.",
        "answer_c": "It targets elements that are not visible within their container.",
        "answer_d": "It specifies elements that are not part of a particular class."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 20,
      "Question": "In Node.js, what is the function of the `cluster` module?",
      "Answers": {
        "answer_a": "It allows you to create child processes that share server ports to utilize multi-core systems effectively.",
        "answer_b": "It manages the distribution of load across multiple servers.",
        "answer_c": "It provides utilities for clustering and managing databases.",
        "answer_d": "It facilitates the creation of clusters for handling multiple asynchronous tasks."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 21,
      "Question": "How does the `will-change` property enhance performance in CSS?",
      "Answers": {
        "answer_a": "It hints to the browser about which properties of an element are expected to change, allowing it to optimize rendering.",
        "answer_b": "It forces the browser to re-render an element every time its state changes.",
        "answer_c": "It optimizes the visibility of elements that are likely to be updated frequently.",
        "answer_d": "It specifies how elements should be animated when their state changes."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 22,
      "Question": "What is the `Proxy` object used for in JavaScript?",
      "Answers": {
        "answer_a": "It allows for creating a proxy for another object to intercept and redefine fundamental operations.",
        "answer_b": "It provides a mechanism for creating objects with private properties.",
        "answer_c": "It facilitates the management of asynchronous operations and callbacks.",
        "answer_d": "It defines a new prototype chain for custom objects."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 23,
      "Question": "What is the purpose of the `position: sticky` property in CSS?",
      "Answers": {
        "answer_a": "It allows an element to stick to its container's boundaries while scrolling within a defined range.",
        "answer_b": "It fixes an element to a specific position on the screen regardless of scrolling.",
        "answer_c": "It makes an element stick to the viewport when it reaches a certain scroll position.",
        "answer_d": "It positions an element in a way that it is always visible on the screen while scrolling."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 24,
      "Question": "How does `Promise.allSettled()` differ from `Promise.all()` in JavaScript?",
      "Answers": {
        "answer_a": "It returns a promise that resolves after all of the given promises have either resolved or rejected, while `Promise.all()` resolves only if all promises are fulfilled.",
        "answer_b": "It waits for all promises to be rejected before resolving.",
        "answer_c": "It provides a result based on the first promise that resolves or rejects.",
        "answer_d": "It ensures that at least one promise among the provided ones resolves successfully."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 25,
      "Question": "What does the `aspect-ratio` property do in CSS?",
      "Answers": {
        "answer_a": "It defines a preferred aspect ratio for the element's box, allowing the browser to maintain that ratio during resizing.",
        "answer_b": "It sets the aspect ratio for images to ensure they fit within their container.",
        "answer_c": "It controls the ratio of font size to element dimensions.",
        "answer_d": "It specifies the aspect ratio for flexible grid layouts."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 26,
      "Question": "In PHP, how do you handle file uploads securely?",
      "Answers": {
        "answer_a": "By validating the file type, size, and handling potential file path manipulations to prevent security risks.",
        "answer_b": "By setting a maximum file upload size in the PHP configuration and renaming uploaded files.",
        "answer_c": "By using a temporary directory to store uploaded files before processing.",
        "answer_d": "By restricting the file upload functionality to authenticated users only."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 27,
      "Question": "What is the difference between `document.querySelectorAll()` and `document.getElementsByClassName()` in JavaScript?",
      "Answers": {
        "answer_a": "`document.querySelectorAll()` returns a NodeList of all matching elements, while `document.getElementsByClassName()` returns an HTMLCollection of elements with the specified class name.",
        "answer_b": "`document.querySelectorAll()` is used for selecting elements by tag name, while `document.getElementsByClassName()` selects elements by attribute.",
        "answer_c": "`document.querySelectorAll()` returns a live collection of elements, while `document.getElementsByClassName()` returns a static collection.",
        "answer_d": "`document.querySelectorAll()` is used for element selection based on IDs, while `document.getElementsByClassName()` is used for class-based selection."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 28,
      "Question": "How does `CSS Grid`'s `grid-template-areas` property work?",
      "Answers": {
        "answer_a": "It allows you to define a grid layout by specifying named areas that correspond to grid items, making layout configuration more intuitive.",
        "answer_b": "It sets up a grid layout by specifying the dimensions of grid items in each area.",
        "answer_c": "It controls the spacing between grid items by defining area-based margins.",
        "answer_d": "It manages the alignment of grid items across various grid tracks."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 29,
      "Question": "What is the `v8` engine used for in Node.js?",
      "Answers": {
        "answer_a": "It is the JavaScript engine developed by Google that Node.js uses to execute JavaScript code.",
        "answer_b": "It is a tool for managing Node.js versions and dependencies.",
        "answer_c": "It provides utilities for optimizing JavaScript code performance in Node.js.",
        "answer_d": "It is a runtime environment for executing Node.js scripts in a virtual machine."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 30,
      "Question": "How does `CSS Grid` handle `auto-fill` and `auto-fit` keywords?",
      "Answers": {
        "answer_a": "`auto-fill` creates as many columns as possible, filling the row with empty columns, while `auto-fit` collapses empty columns to fit the available space.",
        "answer_b": "`auto-fill` adjusts the grid template to fit content, while `auto-fit` maintains fixed column sizes.",
        "answer_c": "`auto-fill` is used for setting fixed column sizes, while `auto-fit` manages responsive column counts.",
        "answer_d": "`auto-fill` determines the size of columns, while `auto-fit` handles content alignment within columns."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 31,
      "Question": "What is the `AsyncLocalStorage` class in Node.js used for?",
      "Answers": {
        "answer_a": "It provides a way to manage and store data across asynchronous operations within the same context.",
        "answer_b": "It handles the persistence of data across multiple asynchronous tasks.",
        "answer_c": "It enables the creation of async-safe storage for caching and memoization.",
        "answer_d": "It allows the management of async operations and event listeners."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 32,
      "Question": "What is the purpose of the `document.fragment` object in JavaScript?",
      "Answers": {
        "answer_a": "It represents a minimal document object that can be used to build or manipulate DOM elements off-screen before inserting them into the main document.",
        "answer_b": "It provides a way to handle fragments of text in the DOM.",
        "answer_c": "It manages temporary storage of DOM nodes during document manipulation.",
        "answer_d": "It allows the cloning of entire documents for use in different contexts."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 33,
      "Question": "In PHP, what does the `array_map()` function do?",
      "Answers": {
        "answer_a": "It applies a callback function to each element of an array and returns a new array with the results.",
        "answer_b": "It merges two or more arrays into one.",
        "answer_c": "It sorts the elements of an array based on a callback function.",
        "answer_d": "It filters array elements based on a specified condition."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 34,
      "Question": "What is the `object` type in JavaScript and how is it different from `function`?",
      "Answers": {
        "answer_a": "The `object` type is a data structure for storing collections of data and functions, while `function` is a callable object that can execute code and return a result.",
        "answer_b": "The `object` type is used for creating functions, while `function` is a data structure for managing objects.",
        "answer_c": "The `object` type handles asynchronous operations, while `function` manages synchronous tasks.",
        "answer_d": "The `object` type defines a structure for variables, while `function` defines the logic for manipulating those variables."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 35,
      "Question": "What is the difference between `localStorage` and `sessionStorage` in JavaScript?",
      "Answers": {
        "answer_a": "`localStorage` persists data across sessions, while `sessionStorage` only persists data for the duration of a page session.",
        "answer_b": "`localStorage` is limited to a single domain, while `sessionStorage` can be shared across different domains.",
        "answer_c": "`localStorage` stores data on the server, while `sessionStorage` stores data locally in the browser.",
        "answer_d": "`localStorage` is used for temporary data, while `sessionStorage` is used for permanent data."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 36,
      "Question": "How does `CSS Flexbox` handle alignment of items along the cross axis?",
      "Answers": {
        "answer_a": "Using properties like `align-items`, `align-self`, and `align-content` to control alignment and spacing along the cross axis.",
        "answer_b": "By setting the `justify-content` property to align items across the cross axis.",
        "answer_c": "By using `margin` and `padding` properties to adjust item positions along the cross axis.",
        "answer_d": "Through the `flex-direction` property which determines the alignment of items."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 37,
      "Question": "What is the purpose of the `Event Delegation` pattern in JavaScript?",
      "Answers": {
        "answer_a": "It involves using a single event listener on a parent element to handle events for its child elements, improving performance and simplifying event management.",
        "answer_b": "It allows events to be passed from child elements to parent elements.",
        "answer_c": "It handles events based on the event type and target element.",
        "answer_d": "It creates a delegation of events to manage multiple event handlers simultaneously."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 38,
      "Question": "What does the `DOMContentLoaded` event signify in JavaScript?",
      "Answers": {
        "answer_a": "It indicates that the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.",
        "answer_b": "It signals that all external resources such as stylesheets and images have been fully loaded.",
        "answer_c": "It denotes the completion of the document's CSSOM and DOM construction.",
        "answer_d": "It occurs when the document's scripts have finished executing."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 39,
      "Question": "In PHP, how can you secure data submitted through forms to prevent SQL injection attacks?",
      "Answers": {
        "answer_a": "By using prepared statements and parameterized queries with PDO or MySQLi.",
        "answer_b": "By escaping special characters in SQL queries.",
        "answer_c": "By validating and sanitizing user input before processing.",
        "answer_d": "By restricting access to the database using user roles and permissions."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 40,
      "Question": "What does the `CSS `overflow` property control?",
      "Answers": {
        "answer_a": "It determines how content that overflows the boundaries of its container is handled, such as with scrollbars or hidden content.",
        "answer_b": "It specifies the visibility of an element's content within its parent container.",
        "answer_c": "It adjusts the size of an element's container based on its content.",
        "answer_d": "It manages the spacing and alignment of overflowing content within a grid layout."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 41,
      "Question": "How does `async/await` improve asynchronous JavaScript code?",
      "Answers": {
        "answer_a": "It allows for writing asynchronous code in a synchronous style, improving readability and handling errors more easily.",
        "answer_b": "It executes asynchronous tasks in parallel to improve performance.",
        "answer_c": "It provides a way to chain asynchronous operations without using callbacks.",
        "answer_d": "It synchronizes asynchronous operations with the main thread."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 42,
      "Question": "What is the `postMessage` method used for in JavaScript?",
      "Answers": {
        "answer_a": "It enables communication between different windows or iframes, even if they are from different origins.",
        "answer_b": "It allows sending HTTP POST requests from a browser to a server.",
        "answer_c": "It transmits messages between different JavaScript contexts within the same window.",
        "answer_d": "It manages message queues for asynchronous operations in web workers."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 43,
      "Question": "What is the significance of the `setImmediate` function in Node.js?",
      "Answers": {
        "answer_a": "It schedules a single callback to be executed immediately after the current event loop phase.",
        "answer_b": "It provides a way to run functions at the start of the next event loop cycle.",
        "answer_c": "It handles immediate execution of asynchronous tasks in a non-blocking manner.",
        "answer_d": "It manages the scheduling of tasks that are to be executed in the future."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 44,
      "Question": "In CSS, how does the `z-index` property affect element stacking?",
      "Answers": {
        "answer_a": "It determines the stacking order of positioned elements along the z-axis, with higher values appearing on top of lower values.",
        "answer_b": "It controls the visibility of elements by changing their opacity levels.",
        "answer_c": "It sets the distance of elements from the viewport edge along the x-axis.",
        "answer_d": "It defines the priority of element rendering based on their size and position."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 45,
      "Question": "What does the `Array.prototype.reduce()` method do in JavaScript?",
      "Answers": {
        "answer_a": "It applies a function against an accumulator and each element of the array, resulting in a single value.",
        "answer_b": "It creates a new array with all elements that pass a test implemented by a provided function.",
        "answer_c": "It merges multiple arrays into one, with each element transformed by a callback function.",
        "answer_d": "It filters elements based on a condition and returns an array of the results."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 46,
      "Question": "In PHP, what does the `filter_var()` function do?",
      "Answers": {
        "answer_a": "It filters a variable with a specified filter, such as validating and sanitizing inputs.",
        "answer_b": "It checks if a variable is set and not empty.",
        "answer_c": "It converts a variable to a different type.",
        "answer_d": "It escapes special characters in a variable for safe output."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 47,
      "Question": "What does the `Math.random()` function return in JavaScript?",
      "Answers": {
        "answer_a": "It returns a pseudorandom floating-point number between 0 (inclusive) and 1 (exclusive).",
        "answer_b": "It generates a random integer between 0 and 100.",
        "answer_c": "It produces a random number within a specified range.",
        "answer_d": "It provides a random string of characters."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 48,
      "Question": "How can you ensure a variable is an array in JavaScript?",
      "Answers": {
        "answer_a": "By using `Array.isArray(variable)` to check if the variable is an array.",
        "answer_b": "By checking if `typeof variable === 'object'` and `variable instanceof Array`.",
        "answer_c": "By verifying if `variable` has the `length` property.",
        "answer_d": "By using `Object.prototype.toString.call(variable) === '[object Array]'`."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 49,
      "Question": "What is the purpose of the `Object.create()` method in JavaScript?",
      "Answers": {
        "answer_a": "It creates a new object with the specified prototype object and properties.",
        "answer_b": "It duplicates an existing object with a new prototype chain.",
        "answer_c": "It returns a new object with a different constructor.",
        "answer_d": "It initializes a new object with a specified prototype and methods."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 50,
      "Question": "What does the `fetch` API do in JavaScript?",
      "Answers": {
        "answer_a": "It provides a modern way to make HTTP requests and handle responses using Promises.",
        "answer_b": "It allows sending data to the server using a GET request.",
        "answer_c": "It provides a method to make synchronous HTTP requests.",
        "answer_d": "It allows for sending data and receiving responses in XML format."
      },
      "correct_answer": "answer_a"
    }
]

module.exports = quest