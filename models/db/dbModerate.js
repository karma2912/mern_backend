const quest = [
    {
        "Qid": 1,
        "Question": "What is the primary function of a DBMS?",
        "Answers": { 
            "answer_a": "Manage and control database operations", 
            "answer_b": "Encrypt data", 
            "answer_c": "Perform backups", 
            "answer_d": "Design schemas"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 2,
        "Question": "Which SQL statement is used to retrieve data?",
        "Answers": { 
            "answer_a": "SELECT", 
            "answer_b": "UPDATE", 
            "answer_c": "INSERT", 
            "answer_d": "DELETE"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 3,
        "Question": "What is a 'primary key'?",
        "Answers": { 
            "answer_a": "A unique identifier for a record", 
            "answer_b": "A foreign key reference", 
            "answer_c": "An index on a table", 
            "answer_d": "A type of data encryption"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 4,
        "Question": "What does SQL stand for?",
        "Answers": { 
            "answer_a": "Structured Query Language", 
            "answer_b": "Standard Query Language", 
            "answer_c": "Sequential Query Language", 
            "answer_d": "System Query Language"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 5,
        "Question": "What is a 'foreign key'?",
        "Answers": { 
            "answer_a": "A key used to link two tables", 
            "answer_b": "A key that is unique within a table", 
            "answer_c": "An index for faster queries", 
            "answer_d": "A key for data encryption"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 6,
        "Question": "Which SQL clause is used to filter records?",
        "Answers": { 
            "answer_a": "WHERE", 
            "answer_b": "GROUP BY", 
            "answer_c": "ORDER BY", 
            "answer_d": "HAVING"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 7,
        "Question": "What is 'normalization'?",
        "Answers": { 
            "answer_a": "Process of organizing data to reduce redundancy", 
            "answer_b": "Process of encrypting data", 
            "answer_c": "Process of backing up data", 
            "answer_d": "Process of indexing data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 8,
        "Question": "What is an 'index'?",
        "Answers": { 
            "answer_a": "A data structure that improves query performance", 
            "answer_b": "A method of data encryption", 
            "answer_c": "A type of data backup", 
            "answer_d": "A design for database tables"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 9,
        "Question": "Which SQL statement is used to add new records?",
        "Answers": { 
            "answer_a": "INSERT", 
            "answer_b": "UPDATE", 
            "answer_c": "SELECT", 
            "answer_d": "DELETE"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 10,
        "Question": "What is a 'view' in SQL?",
        "Answers": { 
            "answer_a": "A virtual table based on a query", 
            "answer_b": "A physical table in the database", 
            "answer_c": "An index on a table", 
            "answer_d": "A backup of the database"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 11,
        "Question": "What does 'DDL' stand for?",
        "Answers": { 
            "answer_a": "Data Definition Language", 
            "answer_b": "Data Description Language", 
            "answer_c": "Data Distribution Language", 
            "answer_d": "Data Drive Language"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 12,
        "Question": "What is 'ACID' in database transactions?",
        "Answers": { 
            "answer_a": "Atomicity, Consistency, Isolation, Durability", 
            "answer_b": "Availability, Consistency, Isolation, Durability", 
            "answer_c": "Atomicity, Consistency, Integrity, Durability", 
            "answer_d": "Atomicity, Consistency, Isolation, Data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 13,
        "Question": "What is a 'table' in a relational database?",
        "Answers": { 
            "answer_a": "A collection of rows and columns", 
            "answer_b": "A collection of database schemas", 
            "answer_c": "A data encryption method", 
            "answer_d": "A type of index"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 14,
        "Question": "What is a 'schema'?",
        "Answers": { 
            "answer_a": "The structure of a database", 
            "answer_b": "A type of query", 
            "answer_c": "An encryption method", 
            "answer_d": "A data backup strategy"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 15,
        "Question": "What does 'CRUD' stand for?",
        "Answers": { 
            "answer_a": "Create, Read, Update, Delete", 
            "answer_b": "Create, Remove, Update, Delete", 
            "answer_c": "Create, Read, Upload, Delete", 
            "answer_d": "Create, Read, Update, Data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 16,
        "Question": "What is 'data integrity'?",
        "Answers": { 
            "answer_a": "Ensuring data is accurate and consistent", 
            "answer_b": "Encrypting data for security", 
            "answer_c": "Backing up data for recovery", 
            "answer_d": "Indexing data for performance"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 17,
        "Question": "What does 'SQL' stand for?",
        "Answers": { 
            "answer_a": "Structured Query Language", 
            "answer_b": "Sequential Query Language", 
            "answer_c": "Standard Query Language", 
            "answer_d": "Systematic Query Language"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 18,
        "Question": "What is 'referential integrity'?",
        "Answers": { 
            "answer_a": "Ensuring foreign keys match primary keys", 
            "answer_b": "Ensuring data is encrypted", 
            "answer_c": "Ensuring data is indexed", 
            "answer_d": "Ensuring data is backed up"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 19,
        "Question": "What is a 'stored procedure'?",
        "Answers": { 
            "answer_a": "A precompiled SQL statement", 
            "answer_b": "A type of database backup", 
            "answer_c": "An SQL query executed in real-time", 
            "answer_d": "A data encryption method"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 20,
        "Question": "What is a 'cursor' in SQL?",
        "Answers": { 
            "answer_a": "A database object for row-by-row processing", 
            "answer_b": "A method for encrypting SQL queries", 
            "answer_c": "A type of index", 
            "answer_d": "A form of data backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 21,
        "Question": "What is 'data redundancy'?",
        "Answers": { 
            "answer_a": "Duplicate data stored in a database", 
            "answer_b": "Encrypted data in the database", 
            "answer_c": "Indexed data in the database", 
            "answer_d": "Backed-up data in the database"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 22,
        "Question": "What is a 'subquery'?",
        "Answers": { 
            "answer_a": "A query nested inside another query", 
            "answer_b": "A type of database index", 
            "answer_c": "A stored procedure", 
            "answer_d": "A type of data backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 23,
        "Question": "What is 'data modeling'?",
        "Answers": { 
            "answer_a": "Creating a visual representation of data and relationships", 
            "answer_b": "Encrypting data", 
            "answer_c": "Indexing data for faster access", 
            "answer_d": "Backing up data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 24,
        "Question": "What is 'data warehousing'?",
        "Answers": { 
            "answer_a": "Storing and managing large volumes of data", 
            "answer_b": "Encrypting data for security", 
            "answer_c": "Indexing data for quick retrieval", 
            "answer_d": "Backing up data periodically"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 25,
        "Question": "What is 'data aggregation'?",
        "Answers": { 
            "answer_a": "Combining data from multiple sources into a single view", 
            "answer_b": "Encrypting data for security", 
            "answer_c": "Indexing data for performance", 
            "answer_d": "Backing up data for recovery"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 26,
        "Question": "What is 'JOIN' in SQL?",
        "Answers": { 
            "answer_a": "Combining rows from two or more tables", 
            "answer_b": "Encrypting data from multiple tables", 
            "answer_c": "Creating indexes on multiple tables", 
            "answer_d": "Backing up data from multiple tables"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 27,
        "Question": "What is 'entity integrity'?",
        "Answers": { 
            "answer_a": "Ensuring each entity has a unique identifier", 
            "answer_b": "Encrypting each entity's data", 
            "answer_c": "Indexing each entity for performance", 
            "answer_d": "Backing up each entity's data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 28,
        "Question": "What is 'data concurrency'?",
        "Answers": { 
            "answer_a": "Managing simultaneous data access by multiple users", 
            "answer_b": "Encrypting data for security", 
            "answer_c": "Indexing data for performance", 
            "answer_d": "Backing up data periodically"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 29,
        "Question": "What is 'rollback' in database transactions?",
        "Answers": { 
            "answer_a": "Reverting changes made by a transaction", 
            "answer_b": "Saving changes made by a transaction", 
            "answer_c": "Encrypting transaction data", 
            "answer_d": "Backing up transaction data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 30,
        "Question": "What is 'commit' in database transactions?",
        "Answers": { 
            "answer_a": "Making changes made by a transaction permanent", 
            "answer_b": "Reverting changes made by a transaction", 
            "answer_c": "Encrypting transaction data", 
            "answer_d": "Backing up transaction data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 31,
        "Question": "What is a 'database trigger'?",
        "Answers": { 
            "answer_a": "A procedure that automatically executes in response to certain events", 
            "answer_b": "A type of data encryption", 
            "answer_c": "A method of indexing data", 
            "answer_d": "A form of data backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 32,
        "Question": "What does 'OLAP' stand for?",
        "Answers": { 
            "answer_a": "Online Analytical Processing", 
            "answer_b": "Online Application Processing", 
            "answer_c": "Offline Analytical Processing", 
            "answer_d": "Offline Application Processing"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 33,
        "Question": "What does 'OLTP' stand for?",
        "Answers": { 
            "answer_a": "Online Transaction Processing", 
            "answer_b": "Online Transaction Program", 
            "answer_c": "Offline Transaction Processing", 
            "answer_d": "Offline Transaction Program"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 34,
        "Question": "What is 'denormalization'?",
        "Answers": { 
            "answer_a": "Introducing redundancy to optimize read performance", 
            "answer_b": "Removing redundancy to optimize write performance", 
            "answer_c": "Encrypting data to enhance security", 
            "answer_d": "Indexing data for faster queries"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 35,
        "Question": "What is 'data consistency'?",
        "Answers": { 
            "answer_a": "Ensuring data remains accurate and reliable", 
            "answer_b": "Encrypting data for security", 
            "answer_c": "Indexing data for faster retrieval", 
            "answer_d": "Backing up data regularly"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 36,
        "Question": "What is a 'relationship' in a database?",
        "Answers": { 
            "answer_a": "A connection between two or more tables", 
            "answer_b": "A type of data encryption", 
            "answer_c": "An index on a table", 
            "answer_d": "A backup strategy"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 37,
        "Question": "What is 'data redundancy'?",
        "Answers": { 
            "answer_a": "Duplicate data stored in a database", 
            "answer_b": "Encrypted data stored in the database", 
            "answer_c": "Indexed data stored in the database", 
            "answer_d": "Backed-up data stored in the database"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 38,
        "Question": "What is 'transaction log'?",
        "Answers": { 
            "answer_a": "A record of all changes made to the database", 
            "answer_b": "A type of data encryption", 
            "answer_c": "An index for data access", 
            "answer_d": "A method of data backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 39,
        "Question": "What does 'schema' refer to?",
        "Answers": { 
            "answer_a": "The structure and organization of a database", 
            "answer_b": "A backup of the database", 
            "answer_c": "An encrypted view of the database", 
            "answer_d": "An index for database tables"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 40,
        "Question": "What is a 'database'?",
        "Answers": { 
            "answer_a": "A collection of organized data", 
            "answer_b": "A type of data encryption", 
            "answer_c": "An index for faster data retrieval", 
            "answer_d": "A backup system"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 41,
        "Question": "What does 'DML' stand for?",
        "Answers": { 
            "answer_a": "Data Manipulation Language", 
            "answer_b": "Data Management Language", 
            "answer_c": "Data Modification Language", 
            "answer_d": "Data Modeling Language"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 42,
        "Question": "What is a 'data type'?",
        "Answers": { 
            "answer_a": "A classification of data based on its characteristics", 
            "answer_b": "A type of data encryption", 
            "answer_c": "An index for data storage", 
            "answer_d": "A method for data backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 43,
        "Question": "What is 'data extraction'?",
        "Answers": { 
            "answer_a": "Retrieving data from a database", 
            "answer_b": "Encrypting data for security", 
            "answer_c": "Indexing data for performance", 
            "answer_d": "Backing up data regularly"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 44,
        "Question": "What is 'SQL injection'?",
        "Answers": { 
            "answer_a": "A security vulnerability in SQL queries", 
            "answer_b": "A method of data encryption", 
            "answer_c": "A type of data backup", 
            "answer_d": "An index optimization technique"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 45,
        "Question": "What is a 'transaction' in a database?",
        "Answers": { 
            "answer_a": "A sequence of operations treated as a single unit", 
            "answer_b": "A backup of data", 
            "answer_c": "An encryption method", 
            "answer_d": "An index for queries"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 46,
        "Question": "What is 'data migration'?",
        "Answers": { 
            "answer_a": "Moving data from one system to another", 
            "answer_b": "Encrypting data during transfer", 
            "answer_c": "Indexing data for faster access", 
            "answer_d": "Backing up data to another location"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 47,
        "Question": "What is a 'database management system'?",
        "Answers": { 
            "answer_a": "Software to manage and interact with databases", 
            "answer_b": "Hardware for data storage", 
            "answer_c": "A type of data encryption software", 
            "answer_d": "A data backup strategy"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 48,
        "Question": "What does 'RDBMS' stand for?",
        "Answers": { 
            "answer_a": "Relational Database Management System", 
            "answer_b": "Relational Data Backup System", 
            "answer_c": "Relational Design Management System", 
            "answer_d": "Relational Data Modeling Software"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 49,
        "Question": "What is 'data validation'?",
        "Answers": { 
            "answer_a": "Ensuring data is accurate and meets defined criteria", 
            "answer_b": "Encrypting data for security", 
            "answer_c": "Indexing data for performance", 
            "answer_d": "Backing up data regularly"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 50,
        "Question": "What is 'data definition language'?",
        "Answers": { 
            "answer_a": "Language for defining database structures", 
            "answer_b": "Language for manipulating data", 
            "answer_c": "Language for data encryption", 
            "answer_d": "Language for data backup"
        },
        "correct_answer": "answer_a"
    }
]

module.exports = quest