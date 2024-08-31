const quest = [
  {
    "Qid": 1,
    "Question": "How to include external CSS?",
    "Answers": {
      "answer_a": "<link rel='stylesheet' href='styles.css'>",
      "answer_b": "<style src='styles.css'>",
      "answer_c": "<css href='styles.css'>",
      "answer_d": "<import src='styles.css'>"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 2,
    "Question": "How to create a responsive layout in CSS?",
    "Answers": {
      "answer_a": "Use media queries",
      "answer_b": "Use fixed widths",
      "answer_c": "Use table layout",
      "answer_d": "Use inline styles"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 3,
    "Question": "How to center a block element horizontally?",
    "Answers": {
      "answer_a": "margin: auto;",
      "answer_b": "text-align: center;",
      "answer_c": "float: center;",
      "answer_d": "align: center;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 4,
    "Question": "How to select the first child element in CSS?",
    "Answers": {
      "answer_a": "element:first-child",
      "answer_b": "element:first",
      "answer_c": "element:child(1)",
      "answer_d": "element:first-of-type"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 5,
    "Question": "How to disable a button in HTML?",
    "Answers": {
      "answer_a": "disabled",
      "answer_b": "disable",
      "answer_c": "readonly",
      "answer_d": "inactive"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 6,
    "Question": "What is the purpose of the `async` attribute in JavaScript?",
    "Answers": {
      "answer_a": "Load scripts asynchronously",
      "answer_b": "Make scripts synchronous",
      "answer_c": "Delay script execution",
      "answer_d": "Prevent script execution"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 7,
    "Question": "How to handle errors in JavaScript promises?",
    "Answers": {
      "answer_a": ".catch()",
      "answer_b": ".finally()",
      "answer_c": ".then()",
      "answer_d": ".handle()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 8,
    "Question": "How to check if a variable is an array in JavaScript?",
    "Answers": {
      "answer_a": "Array.isArray()",
      "answer_b": "typeof variable === 'array'",
      "answer_c": "variable instanceof Array",
      "answer_d": "variable.array()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 9,
    "Question": "What method to add an item to an array in JavaScript?",
    "Answers": {
      "answer_a": "push()",
      "answer_b": "add()",
      "answer_c": "append()",
      "answer_d": "insert()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 10,
    "Question": "How to make a PHP variable global?",
    "Answers": {
      "answer_a": "global $var;",
      "answer_b": "public $var;",
      "answer_c": "export $var;",
      "answer_d": "globalize $var;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 11,
    "Question": "How to get the current URL in PHP?",
    "Answers": {
      "answer_a": "$_SERVER['REQUEST_URI']",
      "answer_b": "$_SERVER['URL']",
      "answer_c": "$_GET['url']",
      "answer_d": "$_REQUEST['url']"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 12,
    "Question": "How to execute a SQL query in PHP?",
    "Answers": {
      "answer_a": "mysqli_query()",
      "answer_b": "query()",
      "answer_c": "execute()",
      "answer_d": "db_query()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 13,
    "Question": "How to set a cookie in PHP?",
    "Answers": {
      "answer_a": "setcookie('name', 'value');",
      "answer_b": "cookie('name', 'value');",
      "answer_c": "addcookie('name', 'value');",
      "answer_d": "createcookie('name', 'value');"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 14,
    "Question": "How to start a session in PHP?",
    "Answers": {
      "answer_a": "session_start();",
      "answer_b": "begin_session();",
      "answer_c": "start_session();",
      "answer_d": "init_session();"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 15,
    "Question": "How to use environment variables in Node.js?",
    "Answers": {
      "answer_a": "process.env.VAR_NAME",
      "answer_b": "env.VAR_NAME",
      "answer_c": "config.VAR_NAME",
      "answer_d": "settings.VAR_NAME"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 16,
    "Question": "How to read a file asynchronously in Node.js?",
    "Answers": {
      "answer_a": "fs.readFile()",
      "answer_b": "fs.read()",
      "answer_c": "fs.open()",
      "answer_d": "fs.load()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 17,
    "Question": "How to set up middleware in Express?",
    "Answers": {
      "answer_a": "app.use()",
      "answer_b": "app.middleware()",
      "answer_c": "app.add()",
      "answer_d": "app.setup()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 18,
    "Question": "How to handle POST requests in Express?",
    "Answers": {
      "answer_a": "app.post('/path', handler);",
      "answer_b": "app.get('/path', handler);",
      "answer_c": "app.use('/path', handler);",
      "answer_d": "app.route('/path', handler);"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 19,
    "Question": "How to create a class in JavaScript ES6?",
    "Answers": {
      "answer_a": "class MyClass {}",
      "answer_b": "function MyClass() {}",
      "answer_c": "create class MyClass {}",
      "answer_d": "define MyClass {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 20,
    "Question": "How to access an object's property?",
    "Answers": {
      "answer_a": "obj.property",
      "answer_b": "obj[property]",
      "answer_c": "obj->property",
      "answer_d": "obj.get('property')"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 21,
    "Question": "How to prevent form submission in JavaScript?",
    "Answers": {
      "answer_a": "event.preventDefault();",
      "answer_b": "return false;",
      "answer_c": "stopSubmission();",
      "answer_d": "cancelSubmit();"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 22,
    "Question": "How to load a JavaScript file asynchronously?",
    "Answers": {
      "answer_a": "script async src='file.js'",
      "answer_b": "script defer src='file.js'",
      "answer_c": "script src='file.js' async",
      "answer_d": "script src='file.js' defer"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 23,
    "Question": "How to apply a CSS style to all elements?",
    "Answers": {
      "answer_a": "* { style }",
      "answer_b": "all { style }",
      "answer_c": "element { style }",
      "answer_d": "body { style }"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 24,
    "Question": "How to check if a form input is empty with JavaScript?",
    "Answers": {
      "answer_a": "input.value === ''",
      "answer_b": "input.isEmpty()",
      "answer_c": "input.length == 0",
      "answer_d": "input.empty()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 25,
    "Question": "How to create a variable in CSS?",
    "Answers": {
      "answer_a": "--var-name: value;",
      "answer_b": "var var-name = value;",
      "answer_c": "$var-name: value;",
      "answer_d": "variable var-name = value;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 26,
    "Question": "How to select an element by class in CSS?",
    "Answers": {
      "answer_a": ".class-name {}",
      "answer_b": "#class-name {}",
      "answer_c": "class-name {}",
      "answer_d": "element.class-name {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 27,
    "Question": "How to style the first letter of a paragraph?",
    "Answers": {
      "answer_a": "p::first-letter",
      "answer_b": "p:first-letter",
      "answer_c": "p::start-letter",
      "answer_d": "p:first"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 28,
    "Question": "How to remove whitespace from a string in JavaScript?",
    "Answers": {
      "answer_a": "str.trim()",
      "answer_b": "str.strip()",
      "answer_c": "str.clean()",
      "answer_d": "str.removeWhitespace()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 29,
    "Question": "How to handle file uploads in PHP?",
    "Answers": {
      "answer_a": "$_FILES",
      "answer_b": "$_UPLOAD",
      "answer_c": "$file",
      "answer_d": "$_POST"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 30,
    "Question": "How to escape output in PHP to prevent XSS?",
    "Answers": {
      "answer_a": "htmlspecialchars()",
      "answer_b": "strip_tags()",
      "answer_c": "escape_html()",
      "answer_d": "encode()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 31,
    "Question": "How to send a JSON response in Express?",
    "Answers": {
      "answer_a": "res.json(data);",
      "answer_b": "res.sendJSON(data);",
      "answer_c": "res.data(data);",
      "answer_d": "res.writeJSON(data);"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 32,
    "Question": "How to use a router in Express?",
    "Answers": {
      "answer_a": "app.use('/path', router);",
      "answer_b": "app.router('/path', router);",
      "answer_c": "app.route('/path', router);",
      "answer_d": "app.add('/path', router);"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 33,
    "Question": "How to read query parameters in Express?",
    "Answers": {
      "answer_a": "req.query",
      "answer_b": "req.params",
      "answer_c": "req.body",
      "answer_d": "req.url"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 34,
    "Question": "How to create a custom event in JavaScript?",
    "Answers": {
      "answer_a": "new Event('eventName')",
      "answer_b": "createEvent('eventName')",
      "answer_c": "Event('eventName')",
      "answer_d": "create('eventName')"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 35,
    "Question": "How to handle multiple conditions in JavaScript?",
    "Answers": {
      "answer_a": "if (cond1 && cond2) {}",
      "answer_b": "if (cond1, cond2) {}",
      "answer_c": "if (cond1 || cond2) {}",
      "answer_d": "if (cond1; cond2) {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 36,
    "Question": "How to style a link when hovered?",
    "Answers": {
      "answer_a": "a:hover {}",
      "answer_b": "a:focus {}",
      "answer_c": "a:active {}",
      "answer_d": "a:link {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 37,
    "Question": "How to create a fixed header in CSS?",
    "Answers": {
      "answer_a": "position: fixed;",
      "answer_b": "position: absolute;",
      "answer_c": "position: sticky;",
      "answer_d": "position: relative;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 38,
    "Question": "How to combine CSS selectors?",
    "Answers": {
      "answer_a": "selector1, selector2 {}",
      "answer_b": "selector1 selector2 {}",
      "answer_c": "selector1 > selector2 {}",
      "answer_d": "selector1 + selector2 {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 39,
    "Question": "How to get a form value in JavaScript?",
    "Answers": {
      "answer_a": "document.querySelector('input').value",
      "answer_b": "document.getElementById('input').value",
      "answer_c": "document.forms['form'].elements['input'].value",
      "answer_d": "document.form['input'].value"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 40,
    "Question": "How to concatenate strings in JavaScript?",
    "Answers": {
      "answer_a": "str1 + str2",
      "answer_b": "str1.concat(str2)",
      "answer_c": "str1.append(str2)",
      "answer_d": "str1.join(str2)"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 41,
    "Question": "How to check if an object has a property in JavaScript?",
    "Answers": {
      "answer_a": "obj.hasOwnProperty('prop')",
      "answer_b": "'prop' in obj",
      "answer_c": "obj.contains('prop')",
      "answer_d": "obj.get('prop') !== undefined"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 42,
    "Question": "How to define a default parameter in a function?",
    "Answers": {
      "answer_a": "function func(param = default) {}",
      "answer_b": "function func(param) { if (!param) param = default; }",
      "answer_c": "function func(param: default) {}",
      "answer_d": "function func(param = default) { return param; }"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 43,
    "Question": "How to check if a string contains a substring?",
    "Answers": {
      "answer_a": "str.includes('sub')",
      "answer_b": "str.has('sub')",
      "answer_c": "str.indexOf('sub') > -1",
      "answer_d": "str.contains('sub')"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 44,
    "Question": "How to define a constant in PHP?",
    "Answers": {
      "answer_a": "define('CONST_NAME', 'value');",
      "answer_b": "const CONST_NAME = 'value';",
      "answer_c": "$CONST_NAME = 'value';",
      "answer_d": "constant CONST_NAME = 'value';"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 45,
    "Question": "How to check if a variable is an array in PHP?",
    "Answers": {
      "answer_a": "is_array()",
      "answer_b": "check_array()",
      "answer_c": "array_check()",
      "answer_d": "type_of()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 46,
    "Question": "How to set a default value for an argument in PHP?",
    "Answers": {
      "answer_a": "function myFunc($arg = 'default') {}",
      "answer_b": "function myFunc($arg: 'default') {}",
      "answer_c": "function myFunc($arg) { if (!isset($arg)) $arg = 'default'; }",
      "answer_d": "function myFunc($arg = default) {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 47,
    "Question": "How to handle asynchronous code in JavaScript?",
    "Answers": {
      "answer_a": "Use async/await",
      "answer_b": "Use synchronous functions",
      "answer_c": "Use callbacks",
      "answer_d": "Use setTimeout"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 48,
    "Question": "How to define a method inside a class in JavaScript?",
    "Answers": {
      "answer_a": "method() {}",
      "answer_b": "function method() {}",
      "answer_c": "this.method() {}",
      "answer_d": "def method() {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 49,
    "Question": "How to handle routing in a Node.js application?",
    "Answers": {
      "answer_a": "Use Express Router",
      "answer_b": "Use HTTP server",
      "answer_c": "Use URL patterns",
      "answer_d": "Use middleware"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 50,
    "Question": "How to make a Node.js server listen on a port?",
    "Answers": {
      "answer_a": "server.listen(port);",
      "answer_b": "server.start(port);",
      "answer_c": "server.bind(port);",
      "answer_d": "server.open(port);"
    },
    "correct_answer": "answer_a"
  }
]
module.exports = quest