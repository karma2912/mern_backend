const quest = [
  {
    "Qid": 1,
    "Question": "What is the main purpose of a Dependency Injection (DI) container?",
    "Answers": { 
      "answer_a": "To manage database connections", 
      "answer_b": "To provide object creation and management", 
      "answer_c": "To handle application logging", 
      "answer_d": "To facilitate UI updates"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 2,
    "Question": "In UML, what does the '<<interface>>' stereotype denote?",
    "Answers": { 
      "answer_a": "A class with abstract methods", 
      "answer_b": "A class that cannot be instantiated", 
      "answer_c": "A class used for implementation", 
      "answer_d": "A contract of methods to be implemented"
    },
    "correct_answer": "answer_d"
  },
  {
    "Qid": 3,
    "Question": "Which design pattern is used to ensure that a class has only one instance and provides a global point of access to it?",
    "Answers": { 
      "answer_a": "Factory Method", 
      "answer_b": "Singleton", 
      "answer_c": "Observer", 
      "answer_d": "Decorator"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 4,
    "Question": "What does the SOLID principle 'L' stand for?",
    "Answers": { 
      "answer_a": "Liskov Substitution Principle", 
      "answer_b": "Least Privilege Principle", 
      "answer_c": "Law of Demeter Principle", 
      "answer_d": "Low Coupling Principle"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 5,
    "Question": "In the context of software testing, what is a 'Mock' object used for?",
    "Answers": { 
      "answer_a": "To simulate the behavior of real objects", 
      "answer_b": "To replace the actual database", 
      "answer_c": "To record user interactions", 
      "answer_d": "To track performance metrics"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 6,
    "Question": "Which diagram in UML is used to represent the dynamic behavior of a system?",
    "Answers": { 
      "answer_a": "Class Diagram", 
      "answer_b": "Use Case Diagram", 
      "answer_c": "Sequence Diagram", 
      "answer_d": "Component Diagram"
    },
    "correct_answer": "answer_c"
  },
  {
    "Qid": 7,
    "Question": "In a relational database, what is a 'foreign key'?",
    "Answers": { 
      "answer_a": "A key that uniquely identifies a record", 
      "answer_b": "A key that establishes a relationship between tables", 
      "answer_c": "A key that encrypts data", 
      "answer_d": "A key that indexes records"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 8,
    "Question": "What does the 'KISS' principle stand for in software engineering?",
    "Answers": { 
      "answer_a": "Keep It Simple, Stupid", 
      "answer_b": "Keep It Secure, Stupid", 
      "answer_c": "Keep It Structured, Simple", 
      "answer_d": "Keep It Systematic, Simple"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 9,
    "Question": "Which testing level focuses on the integration of components or systems?",
    "Answers": { 
      "answer_a": "Unit Testing", 
      "answer_b": "Integration Testing", 
      "answer_c": "System Testing", 
      "answer_d": "Acceptance Testing"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 10,
    "Question": "In a microservices architecture, what is the primary role of a service registry?",
    "Answers": { 
      "answer_a": "To manage user authentication", 
      "answer_b": "To register and locate services", 
      "answer_c": "To cache data", 
      "answer_d": "To log service requests"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 11,
    "Question": "Which version control system uses a distributed model?",
    "Answers": { 
      "answer_a": "Git", 
      "answer_b": "Subversion", 
      "answer_c": "Mercurial", 
      "answer_d": "Perforce"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 12,
    "Question": "What does the acronym 'REST' stand for in web services?",
    "Answers": { 
      "answer_a": "Representational State Transfer", 
      "answer_b": "Relational State Transfer", 
      "answer_c": "Resource State Transfer", 
      "answer_d": "Remote State Transfer"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 13,
    "Question": "What is the primary function of a 'Facade' pattern?",
    "Answers": { 
      "answer_a": "To provide a unified interface to a set of interfaces", 
      "answer_b": "To allow objects to change state", 
      "answer_c": "To simplify object creation", 
      "answer_d": "To manage object lifecycle"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 14,
    "Question": "In software design, what does the term 'Coupling' refer to?",
    "Answers": { 
      "answer_a": "The degree of dependency between modules", 
      "answer_b": "The number of methods in a class", 
      "answer_c": "The complexity of a function", 
      "answer_d": "The number of classes in a system"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 15,
    "Question": "Which of the following is NOT a principle of the Agile Manifesto?",
    "Answers": { 
      "answer_a": "Working software over comprehensive documentation", 
      "answer_b": "Customer collaboration over contract negotiation", 
      "answer_c": "Responding to change over following a plan", 
      "answer_d": "Following a plan over responding to change"
    },
    "correct_answer": "answer_d"
  },
  {
    "Qid": 16,
    "Question": "In a class diagram, what does an arrow with a solid line and a triangle head indicate?",
    "Answers": { 
      "answer_a": "Association", 
      "answer_b": "Generalization", 
      "answer_c": "Dependency", 
      "answer_d": "Realization"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 17,
    "Question": "What does 'CAP' theorem stand for in distributed systems?",
    "Answers": { 
      "answer_a": "Consistency, Availability, Partition Tolerance", 
      "answer_b": "Consistency, Accuracy, Performance", 
      "answer_c": "Capacity, Availability, Partitioning", 
      "answer_d": "Consistency, Affordability, Performance"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 18,
    "Question": "Which protocol is commonly used for secure web communication?",
    "Answers": { 
      "answer_a": "HTTP", 
      "answer_b": "FTP", 
      "answer_c": "SSH", 
      "answer_d": "HTTPS"
    },
    "correct_answer": "answer_d"
  },
  {
    "Qid": 19,
    "Question": "What is the role of the 'Observer' pattern in software design?",
    "Answers": { 
      "answer_a": "To create objects without specifying their concrete classes", 
      "answer_b": "To allow objects to observe and react to changes in other objects", 
      "answer_c": "To manage the state of objects", 
      "answer_d": "To encapsulate the algorithm"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 20,
    "Question": "What is a primary benefit of using a 'Message Broker' in microservices architecture?",
    "Answers": { 
      "answer_a": "To handle data storage", 
      "answer_b": "To enable communication between services", 
      "answer_c": "To perform load balancing", 
      "answer_d": "To manage user sessions"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 21,
    "Question": "What does 'CI/CD' stand for in software development?",
    "Answers": { 
      "answer_a": "Continuous Integration/Continuous Deployment", 
      "answer_b": "Continuous Improvement/Continuous Delivery", 
      "answer_c": "Controlled Integration/Controlled Deployment", 
      "answer_d": "Constant Integration/Constant Delivery"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 22,
    "Question": "In UML, what is the purpose of a 'Use Case' diagram?",
    "Answers": { 
      "answer_a": "To show the static structure of the system", 
      "answer_b": "To describe the interactions between actors and the system", 
      "answer_c": "To model the behavior of objects", 
      "answer_d": "To illustrate the flow of data"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 23,
    "Question": "Which of the following is NOT a typical feature of a NoSQL database?",
    "Answers": { 
      "answer_a": "Schema-less design", 
      "answer_b": "Horizontal scaling", 
      "answer_c": "ACID transactions", 
      "answer_d": "Document-based storage"
    },
    "correct_answer": "answer_c"
  },
  {
    "Qid": 24,
    "Question": "What does 'BDD' stand for in software testing?",
    "Answers": { 
      "answer_a": "Behavior-Driven Development", 
      "answer_b": "Binary-Driven Design", 
      "answer_c": "Baseline-Driven Development", 
      "answer_d": "Behavior-Defined Design"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 25,
    "Question": "What is the main purpose of the 'Chain of Responsibility' pattern?",
    "Answers": { 
      "answer_a": "To pass a request along a chain of handlers", 
      "answer_b": "To create a chain of objects for efficient data processing", 
      "answer_c": "To ensure a single handler processes the request", 
      "answer_d": "To chain multiple methods together"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 26,
    "Question": "In database normalization, what is the purpose of achieving 3NF (Third Normal Form)?",
    "Answers": { 
      "answer_a": "To eliminate duplicate columns", 
      "answer_b": "To ensure data is only stored in one place", 
      "answer_c": "To remove columns that are not dependent on the primary key", 
      "answer_d": "To remove transitive dependencies"
    },
    "correct_answer": "answer_d"
  },
  {
    "Qid": 27,
    "Question": "What does 'ORM' stand for in the context of database management?",
    "Answers": { 
      "answer_a": "Object-Relational Mapping", 
      "answer_b": "Object-Relative Management", 
      "answer_c": "Operational Resource Management", 
      "answer_d": "Object-Relational Modeling"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 28,
    "Question": "Which testing approach involves testing the entire system as a whole?",
    "Answers": { 
      "answer_a": "Unit Testing", 
      "answer_b": "Integration Testing", 
      "answer_c": "System Testing", 
      "answer_d": "Acceptance Testing"
    },
    "correct_answer": "answer_c"
  },
  {
    "Qid": 29,
    "Question": "In a UML activity diagram, what does a diamond shape represent?",
    "Answers": { 
      "answer_a": "Action state", 
      "answer_b": "Decision point", 
      "answer_c": "Start node", 
      "answer_d": "End node"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 30,
    "Question": "What is the primary goal of 'Continuous Integration'?",
    "Answers": { 
      "answer_a": "To continuously improve user experience", 
      "answer_b": "To integrate code changes frequently and automatically", 
      "answer_c": "To ensure continuous application availability", 
      "answer_d": "To monitor continuous performance metrics"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 31,
    "Question": "Which type of testing focuses on the software’s performance under load?",
    "Answers": { 
      "answer_a": "Functional Testing", 
      "answer_b": "Regression Testing", 
      "answer_c": "Load Testing", 
      "answer_d": "User Acceptance Testing"
    },
    "correct_answer": "answer_c"
  },
  {
    "Qid": 32,
    "Question": "What is a 'State Machine' diagram used to model in UML?",
    "Answers": { 
      "answer_a": "The system's dynamic behavior", 
      "answer_b": "The static structure of the system", 
      "answer_c": "The flow of control among use cases", 
      "answer_d": "The interaction between objects"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 33,
    "Question": "What is the purpose of 'A/B Testing' in software development?",
    "Answers": { 
      "answer_a": "To compare two versions of a feature to determine which performs better", 
      "answer_b": "To test the application on two different operating systems", 
      "answer_c": "To perform stress testing on two servers", 
      "answer_d": "To ensure compatibility between two versions of the database"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 34,
    "Question": "In a microservices architecture, what does 'Service Discovery' involve?",
    "Answers": { 
      "answer_a": "Locating and identifying services dynamically", 
      "answer_b": "Monitoring the health of services", 
      "answer_c": "Managing service configurations", 
      "answer_d": "Logging service interactions"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 35,
    "Question": "What does 'CQRS' stand for in software design?",
    "Answers": { 
      "answer_a": "Command Query Responsibility Segregation", 
      "answer_b": "Command Query Reuse Strategy", 
      "answer_c": "Command Query Read Synchronization", 
      "answer_d": "Command Quality Review System"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 36,
    "Question": "In software design, what does 'Separation of Concerns' mean?",
    "Answers": { 
      "answer_a": "Dividing a system into distinct features with minimal overlap", 
      "answer_b": "Combining multiple concerns into a single component", 
      "answer_c": "Focusing on one concern at a time during development", 
      "answer_d": "Eliminating concerns to simplify design"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 37,
    "Question": "In software engineering, what is a 'Design Pattern'?",
    "Answers": { 
      "answer_a": "A reusable solution to a common problem in software design", 
      "answer_b": "A set of guidelines for coding standards", 
      "answer_c": "A tool for automating design processes", 
      "answer_d": "A specific implementation of a software feature"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 38,
    "Question": "Which software development methodology focuses on iterative and incremental development with frequent delivery of working software?",
    "Answers": { 
      "answer_a": "Waterfall", 
      "answer_b": "Scrum", 
      "answer_c": "V-Model", 
      "answer_d": "Spiral"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 39,
    "Question": "What is the role of a 'Service Mesh' in microservices architecture?",
    "Answers": { 
      "answer_a": "To handle service-to-service communication", 
      "answer_b": "To store service configurations", 
      "answer_c": "To provide user authentication", 
      "answer_d": "To monitor service performance"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 40,
    "Question": "Which principle of software design emphasizes that changes in one module should not require changes in other modules?",
    "Answers": { 
      "answer_a": "Single Responsibility Principle", 
      "answer_b": "Open/Closed Principle", 
      "answer_c": "Liskov Substitution Principle", 
      "answer_d": "Dependency Inversion Principle"
    },
    "correct_answer": "answerb"
  },
  {
    "Qid": 41,
    "Question": "In the context of Agile, what is a 'Sprint Retrospective'?",
    "Answers": { 
      "answer_a": "A meeting to plan the next sprint", 
      "answer_b": "A review of the completed sprint to improve processes", 
      "answer_c": "A discussion of project goals", 
      "answer_d": "A session to prioritize the backlog"
    },
    "correct_answer": "answer_b"
  },
  {
    "Qid": 42,
    "Question": "Which of the following is a characteristic of 'Event-Driven Architecture'?",
    "Answers": { 
      "answer_a": "Components react to events or messages", 
      "answer_b": "Components communicate through a central repository", 
      "answer_c": "Components are tightly coupled", 
      "answer_d": "Components share a common database"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 43,
    "Question": "What does 'SLA' stand for in the context of service management?",
    "Answers": { 
      "answer_a": "Service Level Agreement", 
      "answer_b": "Service Load Analysis", 
      "answer_c": "Service Level Assessment", 
      "answer_d": "Service Lifecycle Agreement"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 44,
    "Question": "In software design, what is 'Inversion of Control' (IoC)?",
    "Answers": { 
      "answer_a": "A design principle where the flow of control is inverted", 
      "answer_b": "A method for controlling concurrent processes", 
      "answer_c": "A pattern for managing user interactions", 
      "answer_d": "A technique for enhancing system performance"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 45,
    "Question": "What is the purpose of a 'Version Control System' (VCS)?",
    "Answers": { 
      "answer_a": "To track changes in source code", 
      "answer_b": "To manage software releases", 
      "answer_c": "To monitor system performance", 
      "answer_d": "To handle user authentication"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 46,
    "Question": "Which of the following is a benefit of using 'Microservices' over a monolithic architecture?",
    "Answers": { 
      "answer_a": "Improved scalability and flexibility", 
      "answer_b": "Simpler codebase management", 
      "answer_c": "Reduced network overhead", 
      "answer_d": "Faster development cycles"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 47,
    "Question": "In UML, what is the purpose of an 'Object Diagram'?",
    "Answers": { 
      "answer_a": "To show object instances and their relationships at a specific point in time", 
      "answer_b": "To represent the sequence of operations", 
      "answer_c": "To illustrate the static structure of the system", 
      "answer_d": "To detail the system's interactions"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 48,
    "Question": "What is the primary goal of 'Load Balancing' in a distributed system?",
    "Answers": { 
      "answer_a": "To distribute network traffic across multiple servers", 
      "answer_b": "To balance computational load within a single server", 
      "answer_c": "To manage database connections", 
      "answer_d": "To optimize storage utilization"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 49,
    "Question": "In a class diagram, what does a dashed line with an open arrowhead denote?",
    "Answers": { 
      "answer_a": "Dependency", 
      "answer_b": "Association", 
      "answer_c": "Generalization", 
      "answer_d": "Realization"
    },
    "correct_answer": "answer_a"
  },
  {
    "Qid": 50,
    "Question": "What is the purpose of 'Asynchronous Programming'?",
    "Answers": { 
      "answer_a": "To allow programs to perform tasks concurrently", 
      "answer_b": "To synchronize multiple processes", 
      "answer_c": "To optimize memory usage", 
      "answer_d": "To simplify code execution"
    },
    "correct_answer": "answer_a"
  }
]
  module.exports = quest