const quest = [
    {
      "Qid": 1,
      "Question": "What is 'Aspect-Oriented Programming' (AOP) and how does it differ from Object-Oriented Programming (OOP)?",
      "Answers": {
        "answer_a": "AOP focuses on separating cross-cutting concerns through aspects, whereas OOP focuses on encapsulating data and behavior within objects.",
        "answer_b": "AOP uses classes and inheritance while OOP uses interfaces and polymorphism.",
        "answer_c": "AOP deals with algorithm optimization while OOP deals with user interface design.",
        "answer_d": "AOP and OOP are similar methodologies without any significant differences."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 2,
      "Question": "In the context of software architecture, what does 'CQRS' stand for and what problem does it address?",
      "Answers": {
        "answer_a": "Command Query Responsibility Segregation; it addresses the problem of separating read and write operations to optimize performance and scalability.",
        "answer_b": "Centralized Query Response System; it addresses issues related to managing multiple queries in a centralized database.",
        "answer_c": "Continuous Quality Review System; it addresses challenges in maintaining software quality over time.",
        "answer_d": "Component Quality Requirements Specification; it addresses issues in defining component quality requirements."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 3,
      "Question": "What is 'Domain-Driven Design' (DDD) and what is its primary focus?",
      "Answers": {
        "answer_a": "DDD is an approach to software development that emphasizes collaboration with domain experts to create a shared understanding and model of the business domain.",
        "answer_b": "DDD focuses on designing the user interface and experience based on user feedback.",
        "answer_c": "DDD is a strategy for improving software performance by optimizing algorithms.",
        "answer_d": "DDD involves using design patterns to structure code and ensure scalability."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 4,
      "Question": "In software engineering, what does 'CAP Theorem' state and what are its key components?",
      "Answers": {
        "answer_a": "The CAP Theorem states that a distributed system cannot simultaneously guarantee Consistency, Availability, and Partition Tolerance. Key components are Consistency, Availability, and Partition Tolerance.",
        "answer_b": "The CAP Theorem states that a system must achieve high performance, low cost, and ease of use. Key components are Performance, Cost, and Usability.",
        "answer_c": "The CAP Theorem states that a system can only provide Consistency and Availability but not Partition Tolerance.",
        "answer_d": "The CAP Theorem deals with the balance between Scalability and Security in distributed systems."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 5,
      "Question": "What is 'Event Sourcing' and how does it differ from traditional CRUD operations?",
      "Answers": {
        "answer_a": "Event Sourcing is a pattern where state changes are stored as a sequence of events. It differs from CRUD operations which directly modify the current state of the data.",
        "answer_b": "Event Sourcing focuses on generating events for UI updates, whereas CRUD operations focus on managing backend data.",
        "answer_c": "Event Sourcing involves continuous integration of data, while CRUD focuses on manual data entry.",
        "answer_d": "Event Sourcing is used to optimize database queries, whereas CRUD is used for user authentication."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 6,
      "Question": "In the context of software testing, what is 'Mutation Testing' and what does it aim to achieve?",
      "Answers": {
        "answer_a": "Mutation Testing involves making small changes to the code to ensure that test cases can detect these changes, aiming to evaluate the effectiveness of the test suite.",
        "answer_b": "Mutation Testing focuses on optimizing code performance by altering its logic.",
        "answer_c": "Mutation Testing involves creating new test cases based on code mutations.",
        "answer_d": "Mutation Testing is used to manage software versions and dependencies."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 7,
      "Question": "What is 'Service-Oriented Architecture' (SOA) and how does it differ from 'Microservices Architecture'?",
      "Answers": {
        "answer_a": "SOA is an architecture pattern where services are designed to communicate over a network. Microservices are a subset of SOA that emphasizes small, independently deployable services.",
        "answer_b": "SOA involves a monolithic approach to software design, while Microservices involve a distributed approach.",
        "answer_c": "SOA focuses on database optimization, whereas Microservices focus on user interface design.",
        "answer_d": "SOA uses a centralized architecture, while Microservices use a peer-to-peer network."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 8,
      "Question": "In software engineering, what is 'Concurrency Control' and why is it important?",
      "Answers": {
        "answer_a": "Concurrency Control is a technique to manage simultaneous operations on shared data to ensure data consistency and prevent conflicts.",
        "answer_b": "Concurrency Control is used to manage the performance of individual threads in an application.",
        "answer_c": "Concurrency Control deals with the security of software applications.",
        "answer_d": "Concurrency Control is a method for optimizing database queries."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 9,
      "Question": "What does 'Homomorphic Encryption' enable in the context of data processing?",
      "Answers": {
        "answer_a": "Homomorphic Encryption allows computations to be performed on encrypted data without needing to decrypt it first, preserving privacy.",
        "answer_b": "Homomorphic Encryption provides a mechanism for real-time data synchronization across multiple databases.",
        "answer_c": "Homomorphic Encryption is used to compress data for faster transmission.",
        "answer_d": "Homomorphic Encryption ensures that data can only be accessed by authorized users."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 10,
      "Question": "What is the 'Observer Pattern' and in what scenarios is it commonly used?",
      "Answers": {
        "answer_a": "The Observer Pattern is a behavioral design pattern where an object (subject) maintains a list of dependents (observers) that are notified of any state changes. It's used for implementing distributed event-handling systems.",
        "answer_b": "The Observer Pattern is used for managing database transactions and ensuring data consistency.",
        "answer_c": "The Observer Pattern focuses on optimizing algorithm performance in software.",
        "answer_d": "The Observer Pattern deals with the creation of user interface components in software."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 11,
      "Question": "What does 'NoSQL' stand for and what are its primary characteristics?",
      "Answers": {
        "answer_a": "NoSQL stands for 'Not Only SQL'. It is characterized by non-relational data models, horizontal scaling, and flexibility in schema design.",
        "answer_b": "NoSQL stands for 'Non-Structured Query Language'. It focuses on relational database management and fixed schemas.",
        "answer_c": "NoSQL is an extension of SQL designed for complex transactions.",
        "answer_d": "NoSQL refers to traditional SQL databases with no support for large-scale data processing."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 12,
      "Question": "What is 'Dependency Injection' and how does it benefit software design?",
      "Answers": {
        "answer_a": "Dependency Injection is a design pattern where an object receives its dependencies from an external source rather than creating them internally. It benefits software design by promoting loose coupling and enhancing testability.",
        "answer_b": "Dependency Injection involves injecting code into a software application to handle complex algorithms.",
        "answer_c": "Dependency Injection is used for managing user access and permissions in software systems.",
        "answer_d": "Dependency Injection is a technique for optimizing database performance."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 13,
      "Question": "In the context of distributed systems, what is 'Eventual Consistency'?",
      "Answers": {
        "answer_a": "Eventual Consistency is a consistency model where updates to a distributed system will eventually propagate to all nodes, but may not be immediately consistent.",
        "answer_b": "Eventual Consistency ensures that data is always consistent across all nodes in real-time.",
        "answer_c": "Eventual Consistency focuses on optimizing database query performance.",
        "answer_d": "Eventual Consistency is a technique for managing user sessions in distributed systems."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 14,
      "Question": "What is 'Algorithmic Complexity' and how is it measured?",
      "Answers": {
        "answer_a": "Algorithmic Complexity, also known as time complexity, measures the efficiency of an algorithm in terms of the amount of computational resources it requires, usually expressed using Big O notation.",
        "answer_b": "Algorithmic Complexity refers to the hardware resources needed to run an algorithm.",
        "answer_c": "Algorithmic Complexity measures the user interface design of an algorithm.",
        "answer_d": "Algorithmic Complexity deals with the number of lines of code in an algorithm."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 15,
      "Question": "What is the 'Chain of Responsibility' pattern and how does it operate?",
      "Answers": {
        "answer_a": "The Chain of Responsibility pattern is a behavioral design pattern where a chain of handler objects pass a request along until one of them handles it. It helps in decoupling request senders from receivers.",
        "answer_b": "The Chain of Responsibility pattern involves creating a sequence of database transactions.",
        "answer_c": "The Chain of Responsibility pattern is used to manage user authentication and authorization.",
        "answer_d": "The Chain of Responsibility pattern optimizes performance in software algorithms."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 16,
      "Question": "What is 'Backpropagation' in the context of neural networks and how does it work?",
      "Answers": {
        "answer_a": "Backpropagation is an algorithm used for training neural networks by calculating the gradient of the loss function with respect to each weight by the chain rule, updating weights to minimize error.",
        "answer_b": "Backpropagation is a technique for managing data consistency across distributed systems.",
        "answer_c": "Backpropagation refers to the process of deploying neural network models to production.",
        "answer_d": "Backpropagation is used for optimizing database queries and performance."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 17,
      "Question": "What is the 'Decorator Pattern' and when would you use it?",
      "Answers": {
        "answer_a": "The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. It is used to extend functionalities of objects in a flexible and reusable way.",
        "answer_b": "The Decorator Pattern involves adding new components to a software application.",
        "answer_c": "The Decorator Pattern is used for optimizing code performance through code refactoring.",
        "answer_d": "The Decorator Pattern is a method for creating new database schemas."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 18,
      "Question": "What is 'Fault Tolerance' in distributed systems and how is it achieved?",
      "Answers": {
        "answer_a": "Fault Tolerance is the ability of a system to continue operating correctly even when some of its components fail. It is achieved through redundancy, error detection, and recovery mechanisms.",
        "answer_b": "Fault Tolerance refers to the ability to optimize system performance by scaling horizontally.",
        "answer_c": "Fault Tolerance is used to ensure data security and encryption.",
        "answer_d": "Fault Tolerance involves managing user access and permissions."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 19,
      "Question": "What is 'Big Data' and how does it differ from traditional data processing?",
      "Answers": {
        "answer_a": "Big Data refers to extremely large datasets that cannot be processed using traditional data processing tools due to their volume, velocity, and variety. It requires specialized technologies for storage, processing, and analysis.",
        "answer_b": "Big Data is a term used for optimizing small datasets for performance improvements.",
        "answer_c": "Big Data involves traditional relational database management systems for data processing.",
        "answer_d": "Big Data focuses on manual data entry and data cleaning processes."
      },
      "correct_answer": "answer_a"
    },
    {
      "Qid": 20,
      "Question": "What is 'Data Warehousing' and how does it support business intelligence?",
      "Answers": {
        "answer_a": "Data Warehousing involves collecting and managing data from various sources into a central repository, which supports business intelligence by enabling complex queries and analytics for decision-making.",
        "answer_b": "Data Warehousing focuses on real-time data synchronization across multiple databases.",
        "answer_c": "Data Warehousing is used for creating user interface components in software systems.",
        "answer_d": "Data Warehousing deals with the optimization of database query performance."
      },
      "correct_answer": "answer_a"
    }
  ]
  module.exports = quest