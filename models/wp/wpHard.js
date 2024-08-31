const quest = [
  {
    "Qid": 1,
    "Question": "What is the purpose of the `rel` attribute in a link tag?",
    "Answers": {
      "answer_a": "Specifies the relationship between the current and linked document",
      "answer_b": "Defines the link's color",
      "answer_c": "Sets the link's target",
      "answer_d": "Specifies the MIME type of the linked resource"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 2,
    "Question": "How does CSS Grid differ from Flexbox?",
    "Answers": {
      "answer_a": "Grid handles two-dimensional layouts; Flexbox is one-dimensional",
      "answer_b": "Flexbox handles two-dimensional layouts; Grid is one-dimensional",
      "answer_c": "Both handle one-dimensional layouts",
      "answer_d": "Both handle two-dimensional layouts"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 3,
    "Question": "How to use `::before` and `::after` pseudo-elements effectively?",
    "Answers": {
      "answer_a": "To insert content before or after an element's content",
      "answer_b": "To override an element's default styles",
      "answer_c": "To create animations",
      "answer_d": "To change the element's layout"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 4,
    "Question": "What is the difference between `var`, `let`, and `const` in JavaScript?",
    "Answers": {
      "answer_a": "var is function-scoped; let and const are block-scoped",
      "answer_b": "var and let are block-scoped; const is function-scoped",
      "answer_c": "var and const are block-scoped; let is function-scoped",
      "answer_d": "All are block-scoped"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 5,
    "Question": "What is the purpose of a `service worker`?",
    "Answers": {
      "answer_a": "To handle offline caching and background sync",
      "answer_b": "To manage server-side sessions",
      "answer_c": "To perform HTTP requests",
      "answer_d": "To manipulate DOM elements"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 6,
    "Question": "How to manage memory efficiently in a Node.js application?",
    "Answers": {
      "answer_a": "Use memory profiling tools and avoid memory leaks",
      "answer_b": "Use more RAM",
      "answer_c": "Increase CPU speed",
      "answer_d": "Decrease the number of modules"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 7,
    "Question": "How to perform dependency injection in Node.js?",
    "Answers": {
      "answer_a": "Use libraries like `awilix` or `inversify`",
      "answer_b": "Use global variables",
      "answer_c": "Directly import modules",
      "answer_d": "Hard-code dependencies in the functions"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 8,
    "Question": "How to secure PHP applications against SQL injection?",
    "Answers": {
      "answer_a": "Use prepared statements with bound parameters",
      "answer_b": "Escape all user inputs",
      "answer_c": "Sanitize all outputs",
      "answer_d": "Use `mysql_escape_string()` function"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 9,
    "Question": "What is the function of the `fetch` API in JavaScript?",
    "Answers": {
      "answer_a": "To make network requests",
      "answer_b": "To handle local storage",
      "answer_c": "To manipulate DOM elements",
      "answer_d": "To process form data"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 10,
    "Question": "How to handle CORS in Node.js applications?",
    "Answers": {
      "answer_a": "Use the `cors` middleware",
      "answer_b": "Set headers manually",
      "answer_c": "Use a proxy server",
      "answer_d": "Change server configuration"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 11,
    "Question": "How to implement `debouncing` in JavaScript?",
    "Answers": {
      "answer_a": "Wrap function calls with a debounce function",
      "answer_b": "Use setInterval to delay calls",
      "answer_c": "Use setTimeout for immediate calls",
      "answer_d": "Call functions directly without delay"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 12,
    "Question": "How to handle exceptions in Node.js?",
    "Answers": {
      "answer_a": "Use try-catch blocks",
      "answer_b": "Use process.on('uncaughtException')",
      "answer_c": "Use domain module",
      "answer_d": "Avoid asynchronous code"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 13,
    "Question": "How to prevent CSRF attacks in PHP?",
    "Answers": {
      "answer_a": "Use CSRF tokens",
      "answer_b": "Sanitize inputs",
      "answer_c": "Encrypt database",
      "answer_d": "Validate sessions"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 14,
    "Question": "What is the `Shadow DOM`?",
    "Answers": {
      "answer_a": "A way to encapsulate component styles and structure",
      "answer_b": "A method for handling animations",
      "answer_c": "A tool for managing state",
      "answer_d": "A technique for optimizing performance"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 15,
    "Question": "How to implement `throttling` in JavaScript?",
    "Answers": {
      "answer_a": "Use a throttle function to limit execution",
      "answer_b": "Use a debounce function",
      "answer_c": "Use setTimeout with short intervals",
      "answer_d": "Increase the delay in setInterval"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 16,
    "Question": "What is the role of `webpack` in a JavaScript application?",
    "Answers": {
      "answer_a": "To bundle and optimize JavaScript and assets",
      "answer_b": "To run a local development server",
      "answer_c": "To handle database queries",
      "answer_d": "To manage server-side routing"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 17,
    "Question": "How to use `Promises` in Node.js?",
    "Answers": {
      "answer_a": "Return a Promise object from asynchronous functions",
      "answer_b": "Use callback functions",
      "answer_c": "Use synchronous operations",
      "answer_d": "Avoid using asynchronous code"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 18,
    "Question": "How to use `async/await` in JavaScript?",
    "Answers": {
      "answer_a": "Declare functions with `async` and use `await` inside them",
      "answer_b": "Use `async` with regular functions and `await` with promises",
      "answer_c": "Call functions directly with `await`",
      "answer_d": "Use `await` in synchronous functions"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 19,
    "Question": "How to manage large-scale state in React applications?",
    "Answers": {
      "answer_a": "Use state management libraries like Redux or Context API",
      "answer_b": "Use local component state only",
      "answer_c": "Pass state through props",
      "answer_d": "Use global variables"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 20,
    "Question": "What is the purpose of the `WebAssembly`?",
    "Answers": {
      "answer_a": "To run high-performance code on the web",
      "answer_b": "To provide native styling",
      "answer_c": "To handle web animations",
      "answer_d": "To optimize network requests"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 21,
    "Question": "How to handle multi-threading in Node.js?",
    "Answers": {
      "answer_a": "Use Worker Threads or child processes",
      "answer_b": "Use setInterval for concurrency",
      "answer_c": "Use multiple Node.js instances",
      "answer_d": "Node.js does not support multi-threading"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 22,
    "Question": "How to optimize performance in a React application?",
    "Answers": {
      "answer_a": "Use React.memo and useCallback hooks",
      "answer_b": "Increase component re-renders",
      "answer_c": "Avoid using keys in lists",
      "answer_d": "Use inline functions in JSX"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 23,
    "Question": "How to use `webpack` for code splitting?",
    "Answers": {
      "answer_a": "Use dynamic imports with `import()` syntax",
      "answer_b": "Use static imports",
      "answer_c": "Bundle all code into a single file",
      "answer_d": "Split code manually"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 24,
    "Question": "What is `Server-Sent Events` (SSE)?",
    "Answers": {
      "answer_a": "A way to push real-time updates from server to client",
      "answer_b": "A method for bidirectional communication",
      "answer_c": "A protocol for file uploads",
      "answer_d": "A technique for handling web forms"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 25,
    "Question": "How to implement `database migrations` in PHP?",
    "Answers": {
      "answer_a": "Use a library like Phinx or Laravel Migrations",
      "answer_b": "Manually modify the database schema",
      "answer_c": "Use SQL scripts directly",
      "answer_d": "Perform migrations with SQL commands"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 26,
    "Question": "How to use `GraphQL` in a Node.js application?",
    "Answers": {
      "answer_a": "Use libraries like `apollo-server` or `express-graphql`",
      "answer_b": "Use REST APIs",
      "answer_c": "Directly query databases",
      "answer_d": "Use WebSocket for real-time data"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 27,
    "Question": "How to handle `multipart` data in Node.js?",
    "Answers": {
      "answer_a": "Use middleware like `multer`",
      "answer_b": "Use query parameters",
      "answer_c": "Use URL encoding",
      "answer_d": "Use JSON payloads"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 28,
    "Question": "How to prevent `race conditions` in Node.js?",
    "Answers": {
      "answer_a": "Use proper synchronization techniques",
      "answer_b": "Increase the number of server instances",
      "answer_c": "Use synchronous code only",
      "answer_d": "Avoid asynchronous operations"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 29,
    "Question": "What is the purpose of `Webpack Dev Server`?",
    "Answers": {
      "answer_a": "To serve files with live reloading during development",
      "answer_b": "To deploy production-ready bundles",
      "answer_c": "To compile code to WebAssembly",
      "answer_d": "To manage database connections"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 30,
    "Question": "How to secure Node.js applications against common vulnerabilities?",
    "Answers": {
      "answer_a": "Use security best practices and libraries like Helmet",
      "answer_b": "Disable all security features",
      "answer_c": "Use outdated dependencies",
      "answer_d": "Avoid using HTTPS"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 31,
    "Question": "How to implement `JWT` authentication in Node.js?",
    "Answers": {
      "answer_a": "Use libraries like `jsonwebtoken` for token creation and verification",
      "answer_b": "Store tokens in session storage",
      "answer_c": "Use basic HTTP authentication",
      "answer_d": "Authenticate using plain text"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 32,
    "Question": "How to handle `WebSocket` connections in Node.js?",
    "Answers": {
      "answer_a": "Use libraries like `ws` or `socket.io`",
      "answer_b": "Use HTTP for real-time communication",
      "answer_c": "Use `express` middleware",
      "answer_d": "Use static files for updates"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 33,
    "Question": "How to perform `data validation` in PHP?",
    "Answers": {
      "answer_a": "Use functions like `filter_var()` and validation libraries",
      "answer_b": "Use JavaScript validation only",
      "answer_c": "Validate data in SQL queries",
      "answer_d": "Skip validation for performance"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 34,
    "Question": "How to handle `asynchronous error handling` in JavaScript?",
    "Answers": {
      "answer_a": "Use try-catch with async/await or `.catch()` with Promises",
      "answer_b": "Ignore errors and proceed",
      "answer_c": "Handle errors using synchronous code",
      "answer_d": "Use global error handlers only"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 35,
    "Question": "How to use `CSS Variables` dynamically?",
    "Answers": {
      "answer_a": "Update values with JavaScript using `style.setProperty()`",
      "answer_b": "Change them in a CSS file",
      "answer_c": "Define them in media queries",
      "answer_d": "Use them in inline styles"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 36,
    "Question": "How to handle `server-side rendering` (SSR) in React?",
    "Answers": {
      "answer_a": "Use frameworks like Next.js",
      "answer_b": "Render components on the client side only",
      "answer_c": "Use only static HTML",
      "answer_d": "Avoid server-side rendering"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 37,
    "Question": "What is the purpose of `Web Workers`?",
    "Answers": {
      "answer_a": "To run JavaScript in background threads",
      "answer_b": "To manage HTTP requests",
      "answer_c": "To handle DOM manipulation",
      "answer_d": "To optimize CSS rendering"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 38,
    "Question": "How to use `Custom Elements` in HTML?",
    "Answers": {
      "answer_a": "Define them using the `CustomElementRegistry` API",
      "answer_b": "Use `<custom-element>` tags directly",
      "answer_c": "Add them via JavaScript libraries",
      "answer_d": "Embed them with iframe"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 39,
    "Question": "How to implement `immutable data structures` in JavaScript?",
    "Answers": {
      "answer_a": "Use libraries like Immutable.js",
      "answer_b": "Use mutable objects",
      "answer_c": "Modify objects directly",
      "answer_d": "Use `Object.freeze()`"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 40,
    "Question": "What is the purpose of `CSS Grid Layout`?",
    "Answers": {
      "answer_a": "To create complex, responsive layouts with grid-based design",
      "answer_b": "To style individual elements",
      "answer_c": "To handle animations",
      "answer_d": "To manage text formatting"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 41,
    "Question": "How to manage `database transactions` in PHP?",
    "Answers": {
      "answer_a": "Use `beginTransaction()`, `commit()`, and `rollback()` methods",
      "answer_b": "Use single SQL queries only",
      "answer_c": "Handle transactions with JavaScript",
      "answer_d": "Manage transactions with external tools"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 42,
    "Question": "What is `server-side rendering` in Node.js?",
    "Answers": {
      "answer_a": "Rendering HTML on the server before sending it to the client",
      "answer_b": "Rendering JavaScript on the client side",
      "answer_c": "Running client-side scripts on the server",
      "answer_d": "Using static HTML files"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 43,
    "Question": "How to perform `A/B testing` in Node.js applications?",
    "Answers": {
      "answer_a": "Implement feature flags or use a testing library",
      "answer_b": "Use a single version of the application",
      "answer_c": "Randomly redirect users",
      "answer_d": "Test manually without tools"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 44,
    "Question": "How to optimize `React` component rendering?",
    "Answers": {
      "answer_a": "Use `PureComponent`, `React.memo`, and `shouldComponentUpdate`",
      "answer_b": "Increase the number of renders",
      "answer_c": "Avoid using keys in lists",
      "answer_d": "Use inline functions in JSX"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 45,
    "Question": "How to implement `lazy loading` in a React application?",
    "Answers": {
      "answer_a": "Use `React.lazy` and `Suspense`",
      "answer_b": "Load all components upfront",
      "answer_c": "Use `setTimeout` for delays",
      "answer_d": "Avoid using React components"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 46,
    "Question": "What is `CSS specificity`?",
    "Answers": {
      "answer_a": "A measure of how specific a CSS rule is",
      "answer_b": "The order of CSS rules",
      "answer_c": "The size of a CSS file",
      "answer_d": "The type of CSS selector used"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 47,
    "Question": "How to secure a `PHP` application against XSS?",
    "Answers": {
      "answer_a": "Escape output and validate inputs",
      "answer_b": "Use HTTP-only cookies",
      "answer_c": "Encrypt data at rest",
      "answer_d": "Use secure sessions"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 48,
    "Question": "What is the purpose of `Content Security Policy (CSP)`?",
    "Answers": {
      "answer_a": "To prevent XSS and other code injection attacks",
      "answer_b": "To handle server-side caching",
      "answer_c": "To manage API rate limiting",
      "answer_d": "To optimize media content"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 49,
    "Question": "How to manage `data consistency` in distributed systems?",
    "Answers": {
      "answer_a": "Use distributed transactions or eventual consistency models",
      "answer_b": "Rely on manual synchronization",
      "answer_c": "Use local storage only",
      "answer_d": "Ignore consistency requirements"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 50,
    "Question": "How to implement `server-side caching` in Node.js?",
    "Answers": {
      "answer_a": "Use caching libraries like `node-cache` or Redis",
      "answer_b": "Cache data in global variables",
      "answer_c": "Increase server memory",
      "answer_d": "Use HTTP headers only"
    },
    "correct_answer": "answer_a"
  }
]

module.exports = quest