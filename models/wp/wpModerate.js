const quest = [
    
        {
          "Qid": 1,
          "Question": "What is the purpose of the `:root` pseudo-class in CSS?",
          "Answers": {
            "answer_a": "To define global CSS variables that can be accessed throughout the stylesheet.",
            "answer_b": "To select the highest-level ancestor element in the DOM.",
            "answer_c": "To target the first child element of a parent.",
            "answer_d": "To select the root element of the HTML document."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 2,
          "Question": "How can you optimize CSS performance?",
          "Answers": {
            "answer_a": "By minifying CSS files and using efficient selectors.",
            "answer_b": "By using `!important` declarations to override styles.",
            "answer_c": "By placing all CSS rules inline within HTML.",
            "answer_d": "By using multiple CSS files for different elements."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 3,
          "Question": "What is the difference between `Object.freeze()` and `Object.seal()` in JavaScript?",
          "Answers": {
            "answer_a": "`Object.freeze()` prevents any changes to the object, while `Object.seal()` prevents adding or removing properties but allows modifications.",
            "answer_b": "`Object.freeze()` prevents property changes, while `Object.seal()` allows property changes but prevents adding new ones.",
            "answer_c": "`Object.freeze()` allows property changes, while `Object.seal()` prevents any changes.",
            "answer_d": "`Object.freeze()` only affects nested objects, while `Object.seal()` affects the object itself."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 4,
          "Question": "How does PHP's `filter_var()` function improve data validation and sanitization?",
          "Answers": {
            "answer_a": "By applying predefined filters to validate and sanitize data.",
            "answer_b": "By automatically escaping special characters in strings.",
            "answer_c": "By converting data types to their respective formats.",
            "answer_d": "By managing session data securely."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 5,
          "Question": "What is the role of the `Event Loop` in Node.js?",
          "Answers": {
            "answer_a": "To handle asynchronous operations and non-blocking I/O by executing callback functions.",
            "answer_b": "To manage synchronous operations and execute them in a single thread.",
            "answer_c": "To ensure multi-threaded execution of JavaScript code.",
            "answer_d": "To handle real-time communication between server and client."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 6,
          "Question": "How do CSS Grid and Flexbox differ in terms of layout design?",
          "Answers": {
            "answer_a": "CSS Grid provides a two-dimensional layout system, while Flexbox is one-dimensional.",
            "answer_b": "CSS Grid is used for simple layouts, while Flexbox is used for complex layouts.",
            "answer_c": "Flexbox allows for two-dimensional layouts, while CSS Grid is one-dimensional.",
            "answer_d": "Flexbox and CSS Grid are used interchangeably with no significant differences."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 7,
          "Question": "What does the `this` keyword refer to in JavaScript?",
          "Answers": {
            "answer_a": "The context in which a function is executed.",
            "answer_b": "The global object in all contexts.",
            "answer_c": "A predefined object for managing asynchronous tasks.",
            "answer_d": "The function itself."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 8,
          "Question": "How can you create a responsive design using CSS?",
          "Answers": {
            "answer_a": "By using media queries to apply different styles based on viewport size.",
            "answer_b": "By using fixed pixel values for all elements.",
            "answer_c": "By disabling CSS for smaller screens.",
            "answer_d": "By using absolute positioning for layout control."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 9,
          "Question": "What is the purpose of the `async` keyword in a JavaScript function?",
          "Answers": {
            "answer_a": "To define a function that returns a promise and can use `await` within it.",
            "answer_b": "To execute a function synchronously.",
            "answer_c": "To handle errors in a function.",
            "answer_d": "To convert a function into an object."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 10,
          "Question": "How do you handle file uploads in Node.js?",
          "Answers": {
            "answer_a": "By using middleware like `multer` to process `multipart/form-data`.",
            "answer_b": "By using built-in `fs` module functions only.",
            "answer_c": "By directly handling file streams in the request object.",
            "answer_d": "By saving files directly in the database."
          },
          "correct_answer": "answer_a"
        },
        {
          "Qid": 11,
          "Question": "What is the purpose of the `defer` attribute in the `<script>` tag?",
          "Answers": {
            "answer_a": "To ensure the script executes after the HTML document has been parsed.",
            "answer_b": "To load the script asynchronously without blocking the HTML parsing.",
            "answer_c": "To apply the script to only specific HTML elements.",
            "answer_d": "To preload the script in advance for faster execution."
          },
          "correct_answer": "answer_a"
        },
        {
          "_id": "66a38609c14f2e3c49af835b",
          "Qid": 12,
          "Question": "How can you check for browser compatibility issues in CSS?",
          "Answers": {
            "answer_a": "By using tools like Autoprefixer or Can I Use to ensure properties are supported across browsers.",
            "answer_b": "By using only standard CSS properties and avoiding vendor prefixes.",
            "answer_c": "By writing separate CSS files for each browser.",
            "answer_d": "By relying on JavaScript to handle CSS inconsistencies."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af835c",
          "Qid": 13,
          "Question": "What is the purpose of the `bind()` method in JavaScript?",
          "Answers": {
            "answer_a": "To create a new function with a specific `this` value and arguments.",
            "answer_b": "To bind a function to a specific DOM element.",
            "answer_c": "To delay the execution of a function.",
            "answer_d": "To merge two functions into one."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af835d",
          "Qid": 14,
          "Question": "How do you prevent XSS (Cross-Site Scripting) attacks in a PHP application?",
          "Answers": {
            "answer_a": "By sanitizing and escaping user input before outputting it.",
            "answer_b": "By using nonces and CSRF tokens.",
            "answer_c": "By enabling HTTPS.",
            "answer_d": "By disabling JavaScript execution."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af835e",
          "Qid": 15,
          "Question": "What does `event delegation` refer to in JavaScript?",
          "Answers": {
            "answer_a": "A technique of attaching a single event listener to a parent element to manage events for its child elements.",
            "answer_b": "A method of synchronizing events across multiple elements.",
            "answer_c": "A technique of delaying events until a specific condition is met.",
            "answer_d": "A way to bind multiple event handlers to a single element."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af835f",
          "Qid": 16,
          "Question": "What is the significance of `Promises` in JavaScript?",
          "Answers": {
            "answer_a": "They provide a way to handle asynchronous operations more effectively by chaining actions and handling errors.",
            "answer_b": "They are used to create global variables accessible from any part of the code.",
            "answer_c": "They improve the performance of synchronous operations.",
            "answer_d": "They allow for multi-threading in JavaScript."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8360",
          "Qid": 17,
          "Question": "How do you manage state in a PHP application?",
          "Answers": {
            "answer_a": "By using sessions and cookies.",
            "answer_b": "By storing state information in URL parameters.",
            "answer_c": "By directly writing state information to files.",
            "answer_d": "By using global variables."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8361",
          "Qid": 18,
          "Question": "What is a `service worker` in the context of Progressive Web Apps (PWAs)?",
          "Answers": {
            "answer_a": "A background script that handles caching, push notifications, and offline functionality.",
            "answer_b": "A script that manages user authentication and authorization.",
            "answer_c": "A module that optimizes network requests and responses.",
            "answer_d": "A script used for server-side rendering of web pages."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8362",
          "Qid": 19,
          "Question": "What is the difference between `localStorage` and `sessionStorage`?",
          "Answers": {
            "answer_a": "`localStorage` persists data even after the browser is closed, while `sessionStorage` only persists data for the duration of the page session.",
            "answer_b": "`localStorage` is used for secure storage, while `sessionStorage` is used for less secure data.",
            "answer_c": "`sessionStorage` allows larger data storage than `localStorage`.",
            "answer_d": "`localStorage` is supported only in newer browsers, while `sessionStorage` is universally supported."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8363",
          "Qid": 20,
          "Question": "How do you use `fetch()` to make a POST request in JavaScript?",
          "Answers": {
            "answer_a": "By specifying the method as 'POST' and including the body in the request options.",
            "answer_b": "By setting the URL in the request and passing data as query parameters.",
            "answer_c": "By using the `XMLHttpRequest` object with the POST method.",
            "answer_d": "By adding data directly to the URL of the request."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8364",
          "Qid": 21,
          "Question": "What is the purpose of the `::before` and `::after` pseudo-elements in CSS?",
          "Answers": {
            "answer_a": "To insert content before or after the content of an element without adding extra HTML.",
            "answer_b": "To apply styles to the first and last children of an element.",
            "answer_c": "To create custom scrollbars for an element.",
            "answer_d": "To add additional styles to an element's border."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8365",
          "Qid": 22,
          "Question": "How can you manage asynchronous operations in Node.js?",
          "Answers": {
            "answer_a": "By using callbacks, Promises, or async/await.",
            "answer_b": "By using synchronous operations only.",
            "answer_c": "By using a separate thread for each operation.",
            "answer_d": "By converting all operations to synchronous functions."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8366",
          "Qid": 23,
          "Question": "How do you include external CSS files in an HTML document?",
          "Answers": {
            "answer_a": "By using the `<link>` tag with the `rel` attribute set to 'stylesheet'.",
            "answer_b": "By using the `<style>` tag with the `src` attribute.",
            "answer_c": "By using the `<script>` tag with the `type` attribute set to 'text/css'.",
            "answer_d": "By embedding CSS rules directly within HTML elements."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8367",
          "Qid": 24,
          "Question": "How do you prevent SQL injection in PHP?",
          "Answers": {
            "answer_a": "By using prepared statements and parameterized queries.",
            "answer_b": "By manually escaping all user input.",
            "answer_c": "By using HTML encoding on user input.",
            "answer_d": "By validating user input on the client side."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8368",
          "Qid": 25,
          "Question": "What is the difference between `let` and `const` in JavaScript?",
          "Answers": {
            "answer_a": "`let` allows variable reassignment, while `const` creates a read-only variable.",
            "answer_b": "`let` is block-scoped, while `const` is function-scoped.",
            "answer_c": "`const` variables can be reassigned but not redeclared.",
            "answer_d": "`let` is used for constants, while `const` is used for mutable variables."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8369",
          "Qid": 26,
          "Question": "How do you manage user sessions in PHP?",
          "Answers": {
            "answer_a": "By using PHP's built-in session handling functions like `session_start()` and `$_SESSION`.",
            "answer_b": "By storing session data in cookies.",
            "answer_c": "By manually managing session IDs in URL parameters.",
            "answer_d": "By using local storage on the client side."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af836a",
          "Qid": 27,
          "Question": "What does `BEM` stand for in CSS?",
          "Answers": {
            "answer_a": "Block, Element, Modifier.",
            "answer_b": "Base, Extension, Module.",
            "answer_c": "Border, Edge, Margin.",
            "answer_d": "Background, Element, Margin."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af836b",
          "Qid": 28,
          "Question": "How can you use Node.js to serve static files?",
          "Answers": {
            "answer_a": "By using the `express.static` middleware in an Express application.",
            "answer_b": "By reading files directly from the filesystem and sending them in the response.",
            "answer_c": "By embedding static files within the Node.js binary.",
            "answer_d": "By using a third-party static file hosting service."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af836c",
          "Qid": 29,
          "Question": "What is the use of the `:nth-child()` pseudo-class in CSS?",
          "Answers": {
            "answer_a": "To select elements based on their position in a parent element.",
            "answer_b": "To style the first and last children of an element.",
            "answer_c": "To apply styles to only direct children of an element.",
            "answer_d": "To create custom pseudo-elements."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af836d",
          "Qid": 30,
          "Question": "How do you handle cross-origin requests in Node.js with Express?",
          "Answers": {
            "answer_a": "By using the `cors` middleware to allow cross-origin requests.",
            "answer_b": "By manually setting `Access-Control-Allow-Origin` headers in responses.",
            "answer_c": "By using HTTP headers to restrict cross-origin requests.",
            "answer_d": "By configuring the server to accept requests only from the same origin."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af836e",
          "Qid": 31,
          "Question": "What does the `data-` attribute do in HTML?",
          "Answers": {
            "answer_a": "It allows embedding custom data attributes that can be used by JavaScript.",
            "answer_b": "It specifies data to be used by server-side scripts.",
            "answer_c": "It binds data from external sources to HTML elements.",
            "answer_d": "It enhances HTML elements with special data types."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af836f",
          "Qid": 32,
          "Question": "How do you implement lazy loading for images in HTML?",
          "Answers": {
            "answer_a": "By using the `loading='lazy'` attribute in the `<img>` tag.",
            "answer_b": "By setting the `src` attribute of the `<img>` tag to a placeholder image.",
            "answer_c": "By applying a `display: none;` style to images and changing it on scroll.",
            "answer_d": "By using JavaScript to dynamically load images as they come into view."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8370",
          "Qid": 33,
          "Question": "What is the function of `v-for` in Vue.js?",
          "Answers": {
            "answer_a": "To render a list of items by iterating over an array or object.",
            "answer_b": "To conditionally render an element based on a boolean expression.",
            "answer_c": "To create a new Vue instance.",
            "answer_d": "To bind a value to a form input element."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8371",
          "Qid": 34,
          "Question": "What is the `:root` selector in CSS used for?",
          "Answers": {
            "answer_a": "To define global CSS variables that can be accessed anywhere in the stylesheet.",
            "answer_b": "To select the first child of an element.",
            "answer_c": "To apply styles to the root element of the document.",
            "answer_d": "To define default styles for all elements in the document."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8372",
          "Qid": 35,
          "Question": "What is the purpose of `transitions` in CSS?",
          "Answers": {
            "answer_a": "To animate changes in CSS properties smoothly over a specified duration.",
            "answer_b": "To create complex animations with multiple keyframes.",
            "answer_c": "To apply styles to elements when they are hovered over.",
            "answer_d": "To dynamically change styles based on user input."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8373",
          "Qid": 36,
          "Question": "How do you use the `Promise.all()` method in JavaScript?",
          "Answers": {
            "answer_a": "To execute multiple Promises in parallel and wait for all of them to complete.",
            "answer_b": "To execute a single Promise multiple times.",
            "answer_c": "To chain multiple Promises sequentially.",
            "answer_d": "To handle errors in a single Promise."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8374",
          "Qid": 37,
          "Question": "What does the `function*` syntax represent in JavaScript?",
          "Answers": {
            "answer_a": "It defines a generator function that can pause execution and resume later.",
            "answer_b": "It creates a function that returns an object.",
            "answer_c": "It generates a new function every time it is called.",
            "answer_d": "It allows defining multiple functions within a single block."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8375",
          "Qid": 38,
          "Question": "How can you handle errors in asynchronous code using `async/await`?",
          "Answers": {
            "answer_a": "By using `try...catch` blocks around `await` expressions.",
            "answer_b": "By chaining `.catch()` methods after each `await` call.",
            "answer_c": "By using the `finally` block to handle errors.",
            "answer_d": "By checking for errors using `if` statements."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8376",
          "Qid": 39,
          "Question": "How do you dynamically add a class to an element in JavaScript?",
          "Answers": {
            "answer_a": "By using the `classList.add()` method on the element.",
            "answer_b": "By setting the `className` property directly.",
            "answer_c": "By using `document.querySelector()` with the `class` attribute.",
            "answer_d": "By using inline styles to simulate class changes."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8377",
          "Qid": 40,
          "Question": "What does the `mixin` function do in SASS?",
          "Answers": {
            "answer_a": "It allows you to reuse a set of CSS rules in different parts of your stylesheet.",
            "answer_b": "It compiles SASS into regular CSS.",
            "answer_c": "It defines variables for use throughout your SASS files.",
            "answer_d": "It imports external CSS files into SASS."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8378",
          "Qid": 41,
          "Question": "What is the purpose of the `webpack` module bundler?",
          "Answers": {
            "answer_a": "To bundle JavaScript files and other assets into a single or multiple output files.",
            "answer_b": "To serve static files directly from the server.",
            "answer_c": "To optimize HTML for faster rendering.",
            "answer_d": "To manage database migrations."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8379",
          "Qid": 42,
          "Question": "How can you ensure that a PHP script only runs once in a web application?",
          "Answers": {
            "answer_a": "By using a combination of file locking and flags to prevent multiple executions.",
            "answer_b": "By embedding the script in an `<iframe>`.",
            "answer_c": "By setting the `max_execution_time` directive in `php.ini`.",
            "answer_d": "By placing the script inside a conditional statement."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af837a",
          "Qid": 43,
          "Question": "How can you optimize a CSS file for performance?",
          "Answers": {
            "answer_a": "By minifying the CSS and removing unused styles.",
            "answer_b": "By adding comments to the CSS for better readability.",
            "answer_c": "By using a CSS preprocessor like SASS.",
            "answer_d": "By increasing the specificity of CSS selectors."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af837b",
          "Qid": 44,
          "Question": "What does the `@keyframes` rule do in CSS?",
          "Answers": {
            "answer_a": "It defines the keyframes for a CSS animation.",
            "answer_b": "It specifies the duration of an animation.",
            "answer_c": "It applies animations to elements.",
            "answer_d": "It creates transitions between CSS states."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af837c",
          "Qid": 45,
          "Question": "How do you enable strict mode in JavaScript?",
          "Answers": {
            "answer_a": "By adding the `'use strict';` directive at the beginning of a script or function.",
            "answer_b": "By setting the `strict_mode` option in the browser settings.",
            "answer_c": "By using the `strict` keyword when declaring a function.",
            "answer_d": "By enabling a developer tool setting in the browser."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af837d",
          "Qid": 46,
          "Question": "What does the `Object.keys()` method return in JavaScript?",
          "Answers": {
            "answer_a": "An array of a given object's own enumerable property names.",
            "answer_b": "An array of all properties of an object, including inherited ones.",
            "answer_c": "A list of methods defined in the object.",
            "answer_d": "The total number of properties in the object."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af837e",
          "Qid": 47,
          "Question": "What is `CORS` in the context of web development?",
          "Answers": {
            "answer_a": "Cross-Origin Resource Sharing, a security feature to control cross-origin requests.",
            "answer_b": "A method for compressing HTTP responses.",
            "answer_c": "A technique for encrypting data in transit.",
            "answer_d": "A protocol for authenticating users."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af837f",
          "Qid": 48,
          "Question": "What is the use of the `export` keyword in JavaScript modules?",
          "Answers": {
            "answer_a": "To export functions, objects, or primitives from a module so they can be imported into other modules.",
            "answer_b": "To define private variables within a module.",
            "answer_c": "To automatically execute a module when it is imported.",
            "answer_d": "To mark a module as deprecated."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8380",
          "Qid": 49,
          "Question": "What does the `@media` rule do in CSS?",
          "Answers": {
            "answer_a": "It applies styles based on the device's characteristics or viewport size.",
            "answer_b": "It defines a media type for media queries.",
            "answer_c": "It sets the default styles for all media types.",
            "answer_d": "It allows for conditional CSS rules based on user interactions."
          },
          "correct_answer": "answer_a",
          "__v": 0
        },
        {
          "_id": "66a38609c14f2e3c49af8381",
          "Qid": 50,
          "Question": "How do you create a new Vue component?",
          "Answers": {
            "answer_a": "By defining a new Vue component using `Vue.component()` or `defineComponent` in Vue 3.",
            "answer_b": "By writing a new HTML file and linking it to the Vue instance.",
            "answer_c": "By creating a new JavaScript file and including it in the main Vue instance.",
            "answer_d": "By using a global `Vue` method to create a component."
          },
          "correct_answer": "answer_a",
          "__v": 0
        }
      
]
module.exports = quest