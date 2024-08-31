const quest = [
  {
    "Qid": 1,
    "Question": "Which HTML tag defines a clickable link?",
    "Answers": {
      "answer_a": "<link>",
      "answer_b": "<a>",
      "answer_c": "<href>",
      "answer_d": "<url>"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 2,
    "Question": "How to make text bold in HTML?",
    "Answers": {
      "answer_a": "<b>",
      "answer_b": "<strong>",
      "answer_c": "<bold>",
      "answer_d": "<font-weight>"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 3,
    "Question": "Tag used to display images?",
    "Answers": {
      "answer_a": "<img>",
      "answer_b": "<picture>",
      "answer_c": "<image>",
      "answer_d": "<src>"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 4,
    "Question": "How to create a form in HTML?",
    "Answers": {
      "answer_a": "<form>",
      "answer_b": "<input>",
      "answer_c": "<submit>",
      "answer_d": "<field>"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 5,
    "Question": "Attribute for image description?",
    "Answers": {
      "answer_a": "alt",
      "answer_b": "title",
      "answer_c": "desc",
      "answer_d": "text"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 6,
    "Question": "CSS property to center text?",
    "Answers": {
      "answer_a": "text-align: center;",
      "answer_b": "align: center;",
      "answer_c": "center: text;",
      "answer_d": "text-center;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 7,
    "Question": "CSS property for background color?",
    "Answers": {
      "answer_a": "background-color:",
      "answer_b": "bg-color:",
      "answer_c": "color:",
      "answer_d": "background:"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 8,
    "Question": "How to add a border in CSS?",
    "Answers": {
      "answer_a": "border:",
      "answer_b": "outline:",
      "answer_c": "frame:",
      "answer_d": "edge:"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 9,
    "Question": "How to select all paragraphs in CSS?",
    "Answers": {
      "answer_a": "p {}",
      "answer_b": ".p {}",
      "answer_c": "#p {}",
      "answer_d": "paragraph {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 10,
    "Question": "What is used for responsive design?",
    "Answers": {
      "answer_a": "media queries",
      "answer_b": "flexbox",
      "answer_c": "grid",
      "answer_d": "transitions"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 11,
    "Question": "How to define a function in JavaScript?",
    "Answers": {
      "answer_a": "function myFunction() {}",
      "answer_b": "def myFunction() {}",
      "answer_c": "func myFunction() {}",
      "answer_d": "function: myFunction() {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 12,
    "Question": "How to output data in JavaScript?",
    "Answers": {
      "answer_a": "console.log()",
      "answer_b": "print()",
      "answer_c": "alert()",
      "answer_d": "write()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 13,
    "Question": "What keyword declares a variable in JS?",
    "Answers": {
      "answer_a": "let",
      "answer_b": "var",
      "answer_c": "const",
      "answer_d": "define"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 14,
    "Question": "How to create a class in JavaScript?",
    "Answers": {
      "answer_a": "class MyClass {}",
      "answer_b": "create class MyClass {}",
      "answer_c": "class: MyClass {}",
      "answer_d": "define MyClass {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 15,
    "Question": "How to import a module in Node.js?",
    "Answers": {
      "answer_a": "require('module')",
      "answer_b": "import 'module'",
      "answer_c": "include 'module'",
      "answer_d": "load 'module'"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 16,
    "Question": "What method reads files in Node.js?",
    "Answers": {
      "answer_a": "fs.readFile()",
      "answer_b": "fs.open()",
      "answer_c": "fs.read()",
      "answer_d": "fs.load()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 17,
    "Question": "How to start an Express server?",
    "Answers": {
      "answer_a": "app.listen()",
      "answer_b": "server.start()",
      "answer_c": "app.run()",
      "answer_d": "server.listen()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 18,
    "Question": "How to parse JSON in JavaScript?",
    "Answers": {
      "answer_a": "JSON.parse()",
      "answer_b": "JSON.decode()",
      "answer_c": "JSON.load()",
      "answer_d": "JSON.read()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 19,
    "Question": "How to create an HTTP request in JavaScript?",
    "Answers": {
      "answer_a": "fetch()",
      "answer_b": "request()",
      "answer_c": "get()",
      "answer_d": "axios()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 20,
    "Question": "What does PHP stand for?",
    "Answers": {
      "answer_a": "Hypertext Preprocessor",
      "answer_b": "Hypertext Programming",
      "answer_c": "Preprocessor Hypertext",
      "answer_d": "Personal Home Page"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 21,
    "Question": "How to start a PHP script?",
    "Answers": {
      "answer_a": "<?php",
      "answer_b": "<php>",
      "answer_c": "<script>",
      "answer_d": "<?script"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 22,
    "Question": "How to echo in PHP?",
    "Answers": {
      "answer_a": "echo",
      "answer_b": "print",
      "answer_c": "output",
      "answer_d": "write"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 23,
    "Question": "How to include a PHP file?",
    "Answers": {
      "answer_a": "include 'file.php';",
      "answer_b": "require 'file.php';",
      "answer_c": "import 'file.php';",
      "answer_d": "load 'file.php';"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 24,
    "Question": "How to connect to a database in PHP?",
    "Answers": {
      "answer_a": "mysqli_connect()",
      "answer_b": "db_connect()",
      "answer_c": "connect_db()",
      "answer_d": "open_connection()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 25,
    "Question": "How to set a session variable in PHP?",
    "Answers": {
      "answer_a": "$_SESSION['key'] = 'value';",
      "answer_b": "$SESSION['key'] = 'value';",
      "answer_c": "session['key'] = 'value';",
      "answer_d": "set_session('key', 'value');"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 26,
    "Question": "How to comment in CSS?",
    "Answers": {
      "answer_a": "/* comment */",
      "answer_b": "// comment",
      "answer_c": "# comment",
      "answer_d": "<!-- comment -->"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 27,
    "Question": "How to hide an element with CSS?",
    "Answers": {
      "answer_a": "display: none;",
      "answer_b": "visibility: hidden;",
      "answer_c": "opacity: 0;",
      "answer_d": "hide: true;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 28,
    "Question": "How to apply a class in HTML?",
    "Answers": {
      "answer_a": "class='classname'",
      "answer_b": "class='classname;'",
      "answer_c": "id='classname'",
      "answer_d": "className='classname'"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 29,
    "Question": "CSS property for font size?",
    "Answers": {
      "answer_a": "font-size:",
      "answer_b": "text-size:",
      "answer_c": "size:",
      "answer_d": "font:"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 30,
    "Question": "How to make text italic in CSS?",
    "Answers": {
      "answer_a": "font-style: italic;",
      "answer_b": "text-style: italic;",
      "answer_c": "font-weight: italic;",
      "answer_d": "text-decoration: italic;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 31,
    "Question": "What does `alert()` do in JS?",
    "Answers": {
      "answer_a": "Displays a popup",
      "answer_b": "Logs to console",
      "answer_c": "Writes to document",
      "answer_d": "Shows notification"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 32,
    "Question": "How to define a constant in JS?",
    "Answers": {
      "answer_a": "const NAME = value;",
      "answer_b": "let NAME = value;",
      "answer_c": "var NAME = value;",
      "answer_d": "define NAME = value;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 33,
    "Question": "How to add a comment in JS?",
    "Answers": {
      "answer_a": "// comment",
      "answer_b": "/* comment */",
      "answer_c": "<!-- comment -->",
      "answer_d": "# comment"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 34,
    "Question": "JS method to convert to string?",
    "Answers": {
      "answer_a": "toString()",
      "answer_b": "convert()",
      "answer_c": "stringify()",
      "answer_d": "parse()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 35,
    "Question": "How to create a new array in JS?",
    "Answers": {
      "answer_a": "let arr = [];",
      "answer_b": "let arr = ();",
      "answer_c": "let arr = {}",
      "answer_d": "let arr = new Array();"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 36,
    "Question": "How to define a route in Express?",
    "Answers": {
      "answer_a": "app.get('/path', handler);",
      "answer_b": "app.route('/path', handler);",
      "answer_c": "app.use('/path', handler);",
      "answer_d": "app.request('/path', handler);"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 37,
    "Question": "How to install a package in Node.js?",
    "Answers": {
      "answer_a": "npm install package",
      "answer_b": "node install package",
      "answer_c": "require package",
      "answer_d": "npm add package"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 38,
    "Question": "How to handle errors in Express?",
    "Answers": {
      "answer_a": "app.use((err, req, res, next) => {});",
      "answer_b": "app.catch((err) => {});",
      "answer_c": "app.error((err) => {});",
      "answer_d": "app.on('error', (err) => {});"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 39,
    "Question": "What method to create a server in Node.js?",
    "Answers": {
      "answer_a": "http.createServer()",
      "answer_b": "http.startServer()",
      "answer_c": "server.create()",
      "answer_d": "server.listen()"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 40,
    "Question": "How to add a style in HTML?",
    "Answers": {
      "answer_a": "<style> ... </style>",
      "answer_b": "<css> ... </css>",
      "answer_c": "<styles> ... </styles>",
      "answer_d": "<link rel='stylesheet' ...>"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 41,
    "Question": "CSS property for text color?",
    "Answers": {
      "answer_a": "color:",
      "answer_b": "text-color:",
      "answer_c": "font-color:",
      "answer_d": "background-color:"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 42,
    "Question": "How to select by ID in CSS?",
    "Answers": {
      "answer_a": "#id {}",
      "answer_b": ".id {}",
      "answer_c": "id {}",
      "answer_d": "id# {}"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 43,
    "Question": "How to use a variable in PHP?",
    "Answers": {
      "answer_a": "$var;",
      "answer_b": "var $;",
      "answer_c": "variable;",
      "answer_d": "define $var;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 44,
    "Question": "How to get POST data in PHP?",
    "Answers": {
      "answer_a": "$_POST['key']",
      "answer_b": "$POST['key']",
      "answer_c": "$get['key']",
      "answer_d": "$request['key']"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 45,
    "Question": "How to redirect in PHP?",
    "Answers": {
      "answer_a": "header('Location: url');",
      "answer_b": "redirect('url');",
      "answer_c": "go('url');",
      "answer_d": "location.href = 'url';"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 46,
    "Question": "How to use `require` in Node.js?",
    "Answers": {
      "answer_a": "const module = require('module');",
      "answer_b": "import module from 'module';",
      "answer_c": "load('module');",
      "answer_d": "include 'module';"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 47,
    "Question": "How to handle a GET request in Express?",
    "Answers": {
      "answer_a": "app.get('/path', handler);",
      "answer_b": "app.post('/path', handler);",
      "answer_c": "app.use('/path', handler);",
      "answer_d": "app.request('/path', handler);"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 48,
    "Question": "How to export a module in Node.js?",
    "Answers": {
      "answer_a": "module.exports = something;",
      "answer_b": "export something;",
      "answer_c": "exports.something = ...;",
      "answer_d": "define module = ...;"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 49,
    "Question": "How to parse form data in PHP?",
    "Answers": {
      "answer_a": "$_POST['field']",
      "answer_b": "$field",
      "answer_c": "parse('field')",
      "answer_d": "$form['field']"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 50,
    "Question": "How to make an API request in Node.js?",
    "Answers": {
      "answer_a": "fetch()",
      "answer_b": "axios()",
      "answer_c": "http.get()",
      "answer_d": "request()"
    },
    "correct_answer": "answer_b"
  }
]

  module.exports = quest