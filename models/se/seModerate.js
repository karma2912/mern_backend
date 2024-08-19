const quest = [
    {
      "Qid": 1,
      "Question": "What is 'Behavior-Driven Development' (BDD) in software engineering?",
      "Answers": {
        "answer_a": "A methodology that encourages collaboration between developers, QA, and non-technical or business participants.",
        "answer_b": "A technique for optimizing database queries.",
        "answer_c": "A strategy for automating deployment processes.",
        "answer_d": "A practice for designing the user interface."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 2,
      "Question": "What does 'Design by Contract' involve in software development?",
      "Answers": {
        "answer_a": "Specifying preconditions, postconditions, and invariants for software components.",
        "answer_b": "Creating detailed user interface designs.",
        "answer_c": "Writing code with extensive comments.",
        "answer_d": "Documenting the software’s architecture in detail."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 3,
      "Question": "What is the main advantage of 'Microservices Architecture'?",
      "Answers": {
        "answer_a": "It allows for the development and deployment of small, independent services that can be scaled individually.",
        "answer_b": "It simplifies the database design by using a single large database.",
        "answer_c": "It ensures that all components of the software are tightly integrated.",
        "answer_d": "It eliminates the need for version control systems."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 4,
      "Question": "What is 'Continuous Deployment' (CD) in the context of DevOps?",
      "Answers": {
        "answer_a": "Automatically deploying every change that passes automated testing to production.",
        "answer_b": "Manually deploying code changes to production environments.",
        "answer_c": "Regularly updating development environments with new features.",
        "answer_d": "Writing deployment scripts for manual execution."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 5,
      "Question": "In the context of object-oriented programming, what is 'Encapsulation'?",
      "Answers": {
        "answer_a": "The practice of bundling data and methods that operate on the data within a single unit, like a class.",
        "answer_b": "The process of inheriting properties from a parent class.",
        "answer_c": "The technique of making methods and variables public.",
        "answer_d": "The method of creating multiple instances of a class."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 6,
      "Question": "What is 'Pair Programming'?",
      "Answers": {
        "answer_a": "A software development technique where two programmers work together at one workstation.",
        "answer_b": "A method for optimizing code performance.",
        "answer_c": "A process for writing and testing software individually.",
        "answer_d": "A technique for managing software project timelines."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 7,
      "Question": "What does 'Refactoring' mean in software development?",
      "Answers": {
        "answer_a": "The process of restructuring existing code without changing its external behavior.",
        "answer_b": "The process of adding new features to the software.",
        "answer_c": "The process of fixing bugs in the software.",
        "answer_d": "The process of deploying software to production."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 8,
      "Question": "In software development, what is 'Technical Debt'?",
      "Answers": {
        "answer_a": "The cost of additional rework caused by choosing an easy solution now instead of a better approach that would take longer.",
        "answer_b": "The expense related to software licensing and hardware.",
        "answer_c": "The investment required for training new developers.",
        "answer_d": "The effort needed to document software requirements."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 9,
      "Question": "What is 'Code Smell'?",
      "Answers": {
        "answer_a": "A hint that there may be a problem with the code that might require refactoring.",
        "answer_b": "An error message displayed during compilation.",
        "answer_c": "A type of software performance issue.",
        "answer_d": "A method for optimizing database queries."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 10,
      "Question": "What does 'Agile Scrum' emphasize in project management?",
      "Answers": {
        "answer_a": "Iterative development with regular feedback and adjustments through sprints.",
        "answer_b": "Fixed requirements and detailed upfront planning.",
        "answer_c": "Long-term project plans with minimal changes.",
        "answer_d": "Strictly following a pre-defined set of processes and procedures."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 11,
      "Question": "What is a 'Design Pattern' in software engineering?",
      "Answers": {
        "answer_a": "A general reusable solution to a commonly occurring problem in software design.",
        "answer_b": "A specific code snippet for handling errors.",
        "answer_c": "A tool for optimizing software performance.",
        "answer_d": "A document outlining project requirements."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 12,
      "Question": "What is 'Test-Driven Development' (TDD)?",
      "Answers": {
        "answer_a": "A development process where tests are written before the code that needs to be tested.",
        "answer_b": "A methodology for integrating new features into existing code.",
        "answer_c": "A process for deploying code to production environments.",
        "answer_d": "A strategy for managing software project budgets."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 13,
      "Question": "What is the purpose of 'Use Case Diagrams' in UML?",
      "Answers": {
        "answer_a": "To show the interactions between users and the system, and the system’s functionality.",
        "answer_b": "To define the system's architecture and design.",
        "answer_c": "To specify the database schema.",
        "answer_d": "To detail the code implementation of a software component."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 14,
      "Question": "What does 'Continuous Integration' (CI) involve?",
      "Answers": {
        "answer_a": "The practice of integrating code changes frequently, with automated testing to ensure quality.",
        "answer_b": "The process of creating detailed user documentation.",
        "answer_c": "The development of a software prototype.",
        "answer_d": "The manual verification of code changes."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 15,
      "Question": "What is 'Software Configuration Management' (SCM)?",
      "Answers": {
        "answer_a": "The process of managing and controlling changes to software artifacts.",
        "answer_b": "The process of designing software architecture.",
        "answer_c": "The process of optimizing software performance.",
        "answer_d": "The process of documenting software requirements."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 16,
      "Question": "What is the purpose of 'Pair Programming'?",
      "Answers": {
        "answer_a": "To improve code quality and share knowledge between two developers working together.",
        "answer_b": "To test the software in parallel with its development.",
        "answer_c": "To document code for future reference.",
        "answer_d": "To integrate different modules of the software."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 17,
      "Question": "What does 'Software Metrics' refer to?",
      "Answers": {
        "answer_a": "Quantitative measures used to assess various attributes of software, such as quality and performance.",
        "answer_b": "Tools used for debugging software.",
        "answer_c": "Languages used for software development.",
        "answer_d": "Processes for managing project deadlines."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 18,
      "Question": "What is 'User Story' in Agile development?",
      "Answers": {
        "answer_a": "A short, simple description of a feature from the perspective of the user.",
        "answer_b": "A detailed documentation of software requirements.",
        "answer_c": "A comprehensive user manual.",
        "answer_d": "A summary of software testing results."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 19,
      "Question": "In software development, what does 'Scalability' mean?",
      "Answers": {
        "answer_a": "The capability of a system to handle a growing amount of work or its potential to accommodate growth.",
        "answer_b": "The ability to fix bugs and issues quickly.",
        "answer_c": "The ease of deploying new features.",
        "answer_d": "The process of ensuring code quality."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 20,
      "Question": "What is 'Modularization' in software engineering?",
      "Answers": {
        "answer_a": "The practice of dividing a software system into smaller, manageable, and interchangeable modules.",
        "answer_b": "The process of creating detailed project plans.",
        "answer_c": "The technique for managing user interfaces.",
        "answer_d": "The approach to optimizing database queries."
      },
      "correct_answer": "answer_a"
    }
  ]

  module.exports = quest