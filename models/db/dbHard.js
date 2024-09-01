const quest = [
    {
        "Qid": 1,
        "Question": "What is a multi-version concurrency control?",
        "Answers": { 
            "answer_a": "Technique to manage concurrent transactions", 
            "answer_b": "Method for data encryption", 
            "answer_c": "Strategy for data backup", 
            "answer_d": "Tool for schema evolution"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 2,
        "Question": "What is a B+ Tree?",
        "Answers": { 
            "answer_a": "A balanced tree data structure", 
            "answer_b": "A type of hash index", 
            "answer_c": "A method of data encryption", 
            "answer_d": "A type of table join"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 3,
        "Question": "What is the purpose of a checkpoint?",
        "Answers": { 
            "answer_a": "To save database state at a point in time", 
            "answer_b": "To optimize query performance", 
            "answer_c": "To compress data", 
            "answer_d": "To manage user access"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 4,
        "Question": "What is the primary function of a transaction log?",
        "Answers": { 
            "answer_a": "To record changes for recovery purposes", 
            "answer_b": "To store encrypted data", 
            "answer_c": "To index database tables", 
            "answer_d": "To back up database schemas"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 5,
        "Question": "What is the role of the Two-Phase Commit Protocol?",
        "Answers": { 
            "answer_a": "To ensure atomicity across distributed transactions", 
            "answer_b": "To optimize query performance", 
            "answer_c": "To handle data encryption", 
            "answer_d": "To manage user authentication"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 6,
        "Question": "What does a normalized table prevent?",
        "Answers": { 
            "answer_a": "Data redundancy", 
            "answer_b": "Data encryption", 
            "answer_c": "Data corruption", 
            "answer_d": "Data migration"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 7,
        "Question": "What is a surrogate key?",
        "Answers": { 
            "answer_a": "A unique key not derived from application data", 
            "answer_b": "A key that is derived from natural data", 
            "answer_c": "A foreign key from another table", 
            "answer_d": "An index on a primary key"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 8,
        "Question": "What does the term 'sharding' refer to?",
        "Answers": { 
            "answer_a": "Splitting a database into smaller, more manageable pieces", 
            "answer_b": "Encrypting database tables", 
            "answer_c": "Combining multiple databases into one", 
            "answer_d": "Backing up data to cloud storage"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 9,
        "Question": "What is an 'out-of-place' update?",
        "Answers": { 
            "answer_a": "Updating data in a new location", 
            "answer_b": "Updating data in the same location", 
            "answer_c": "Deleting data from a table", 
            "answer_d": "Adding new data to a table"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 10,
        "Question": "What is a 'hash join'?",
        "Answers": { 
            "answer_a": "A join method using hashing for quick access", 
            "answer_b": "A join method using sorting", 
            "answer_c": "A join method using indexing", 
            "answer_d": "A join method using nested loops"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 11,
        "Question": "What is 'eventual consistency'?",
        "Answers": { 
            "answer_a": "Consistency model where updates propagate over time", 
            "answer_b": "A model ensuring immediate consistency", 
            "answer_c": "A method for data encryption", 
            "answer_d": "A backup strategy for databases"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 12,
        "Question": "What is 'vertical partitioning'?",
        "Answers": { 
            "answer_a": "Dividing a table into columns", 
            "answer_b": "Dividing a table into rows", 
            "answer_c": "Combining multiple tables into one", 
            "answer_d": "Splitting a database into different servers"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 13,
        "Question": "What does the term 'write-ahead logging' refer to?",
        "Answers": { 
            "answer_a": "Writing log records before updating data", 
            "answer_b": "Encrypting logs before writing data", 
            "answer_c": "Backing up logs after data update", 
            "answer_d": "Indexing logs for faster access"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 14,
        "Question": "What is 'database denormalization'?",
        "Answers": { 
            "answer_a": "Introducing redundancy to improve performance", 
            "answer_b": "Eliminating redundancy to ensure normalization", 
            "answer_c": "Encrypting data for security", 
            "answer_d": "Splitting tables for better management"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 15,
        "Question": "What is a 'materialized view'?",
        "Answers": { 
            "answer_a": "A view with stored results for faster access", 
            "answer_b": "A virtual view without stored results", 
            "answer_c": "A table with index data", 
            "answer_d": "A type of database backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 16,
        "Question": "What is the 'CAP theorem'?",
        "Answers": { 
            "answer_a": "A principle of distributed systems balancing Consistency, Availability, Partition tolerance", 
            "answer_b": "A principle of database normalization", 
            "answer_c": "A type of encryption standard", 
            "answer_d": "A backup and recovery strategy"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 17,
        "Question": "What is an 'SQL injection'?",
        "Answers": { 
            "answer_a": "A vulnerability that allows attackers to execute arbitrary SQL", 
            "answer_b": "A method for optimizing SQL queries", 
            "answer_c": "A technique for data encryption", 
            "answer_d": "A form of data backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 18,
        "Question": "What is 'data warehousing'?",
        "Answers": { 
            "answer_a": "The process of storing large amounts of data for analysis", 
            "answer_b": "A method for real-time data processing", 
            "answer_c": "A type of database normalization", 
            "answer_d": "A technique for data encryption"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 19,
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
        "Qid": 20,
        "Question": "What is 'logical data independence'?",
        "Answers": { 
            "answer_a": "The ability to change the database schema without affecting applications", 
            "answer_b": "The ability to change data without changing schema", 
            "answer_c": "The ability to encrypt data independently", 
            "answer_d": "The ability to back up data independently"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 21,
        "Question": "What is 'physical data independence'?",
        "Answers": { 
            "answer_a": "The ability to change storage structures without changing the schema", 
            "answer_b": "The ability to change schema without affecting applications", 
            "answer_c": "The ability to independently encrypt data", 
            "answer_d": "The ability to independently back up data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 22,
        "Question": "What is a 'recursive query'?",
        "Answers": { 
            "answer_a": "A query that references itself", 
            "answer_b": "A query that joins multiple tables", 
            "answer_c": "A query that aggregates data", 
            "answer_d": "A query that updates data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 23,
        "Question": "What is 'schema evolution'?",
        "Answers": { 
            "answer_a": "The process of modifying database schema over time", 
            "answer_b": "The process of encrypting database schemas", 
            "answer_c": "The process of backing up schemas", 
            "answer_d": "The process of indexing schemas"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 24,
        "Question": "What is a 'correlated subquery'?",
        "Answers": { 
            "answer_a": "A subquery that references columns of the outer query", 
            "answer_b": "A subquery that does not reference outer query columns", 
            "answer_c": "A query that updates data", 
            "answer_d": "A query that joins tables"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 25,
        "Question": "What is 'data fragmentation'?",
        "Answers": { 
            "answer_a": "Dividing data into smaller, more manageable pieces", 
            "answer_b": "Combining multiple data sources", 
            "answer_c": "Encrypting data", 
            "answer_d": "Backing up data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 26,
        "Question": "What is a 'hybrid index'?",
        "Answers": { 
            "answer_a": "An index combining features of multiple indexing techniques", 
            "answer_b": "An index used for encrypted data", 
            "answer_c": "An index for data backup", 
            "answer_d": "An index for database schema management"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 27,
        "Question": "What is 'log-based recovery'?",
        "Answers": { 
            "answer_a": "A recovery technique using transaction logs", 
            "answer_b": "A recovery technique using data backups", 
            "answer_c": "A recovery technique using database snapshots", 
            "answer_d": "A recovery technique using replication"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 28,
        "Question": "What is 'eventual consistency'?",
        "Answers": { 
            "answer_a": "A consistency model where updates propagate over time", 
            "answer_b": "A model ensuring immediate consistency", 
            "answer_c": "A method for data encryption", 
            "answer_d": "A form of database backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 29,
        "Question": "What is 'snapshot isolation'?",
        "Answers": { 
            "answer_a": "A concurrency control method that avoids locking", 
            "answer_b": "A method of data encryption", 
            "answer_c": "A backup strategy", 
            "answer_d": "A data recovery technique"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 30,
        "Question": "What is 'horizontal partitioning'?",
        "Answers": { 
            "answer_a": "Dividing a table into rows", 
            "answer_b": "Dividing a table into columns", 
            "answer_c": "Combining multiple tables", 
            "answer_d": "Splitting a database into multiple servers"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 31,
        "Question": "What is 'data denormalization'?",
        "Answers": { 
            "answer_a": "Introducing redundancy to improve query performance", 
            "answer_b": "Removing redundancy to ensure data integrity", 
            "answer_c": "Encrypting data for security", 
            "answer_d": "Splitting data for management"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 32,
        "Question": "What is 'distributed transaction'?",
        "Answers": { 
            "answer_a": "A transaction spanning multiple databases", 
            "answer_b": "A transaction within a single database", 
            "answer_c": "A type of data backup", 
            "answer_d": "A query optimization technique"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 33,
        "Question": "What is a 'join index'?",
        "Answers": { 
            "answer_a": "An index that optimizes join operations", 
            "answer_b": "An index for primary keys", 
            "answer_c": "An index for foreign keys", 
            "answer_d": "An index for data encryption"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 34,
        "Question": "What is a 'write set' in database transactions?",
        "Answers": { 
            "answer_a": "The set of data changes made by a transaction", 
            "answer_b": "The set of data reads performed by a transaction", 
            "answer_c": "The set of data backups created by a transaction", 
            "answer_d": "The set of data indexes used by a transaction"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 35,
        "Question": "What is a 'composite key'?",
        "Answers": { 
            "answer_a": "A key composed of multiple columns", 
            "answer_b": "A single-column unique key", 
            "answer_c": "A foreign key referencing multiple columns", 
            "answer_d": "An index on multiple columns"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 36,
        "Question": "What does 'lazy evaluation' refer to?",
        "Answers": { 
            "answer_a": "Deferred computation until results are needed", 
            "answer_b": "Immediate execution of all queries", 
            "answer_c": "Real-time encryption of data", 
            "answer_d": "Instant backup of data changes"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 37,
        "Question": "What is 'deadlock detection'?",
        "Answers": { 
            "answer_a": "The process of identifying and resolving deadlocks", 
            "answer_b": "A technique for avoiding deadlocks", 
            "answer_c": "A method of encrypting deadlock information", 
            "answer_d": "A backup strategy for deadlock scenarios"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 38,
        "Question": "What is a 'trigger' in SQL?",
        "Answers": { 
            "answer_a": "A stored procedure executed automatically on certain events", 
            "answer_b": "A manual SQL command", 
            "answer_c": "A type of database index", 
            "answer_d": "A schema modification"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 39,
        "Question": "What is 'serializability' in database transactions?",
        "Answers": { 
            "answer_a": "Ensuring transactions execute in a way that produces the same result as if they were run sequentially", 
            "answer_b": "Ensuring transactions execute simultaneously", 
            "answer_c": "Ensuring transactions are encrypted", 
            "answer_d": "Ensuring transactions are backed up"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 40,
        "Question": "What is a 'bitmap index'?",
        "Answers": { 
            "answer_a": "An index using bitmap vectors for efficient querying", 
            "answer_b": "An index based on B+ trees", 
            "answer_c": "An index using hash functions", 
            "answer_d": "An index for foreign keys"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 41,
        "Question": "What does 'database replication' achieve?",
        "Answers": { 
            "answer_a": "Creating copies of a database for redundancy and availability", 
            "answer_b": "Encrypting the database", 
            "answer_c": "Indexing database tables", 
            "answer_d": "Normalizing the database schema"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 42,
        "Question": "What is 'query optimization'?",
        "Answers": { 
            "answer_a": "Improving the performance of SQL queries", 
            "answer_b": "Encrypting SQL queries", 
            "answer_c": "Backing up SQL queries", 
            "answer_d": "Normalizing SQL queries"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 43,
        "Question": "What is 'distributed database'?",
        "Answers": { 
            "answer_a": "A database that is distributed across multiple locations", 
            "answer_b": "A single-location database", 
            "answer_c": "A database encrypted for security", 
            "answer_d": "A database that uses in-memory storage"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 44,
        "Question": "What does 'ACID' stand for in database transactions?",
        "Answers": { 
            "answer_a": "Atomicity, Consistency, Isolation, Durability", 
            "answer_b": "Availability, Consistency, Integrity, Durability", 
            "answer_c": "Atomicity, Consistency, Integration, Durability", 
            "answer_d": "Atomicity, Consistency, Isolation, Data"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 45,
        "Question": "What is 'normal form' in database design?",
        "Answers": { 
            "answer_a": "A level of database normalization to reduce redundancy", 
            "answer_b": "A form of data encryption", 
            "answer_c": "A method of data backup", 
            "answer_d": "A type of data indexing"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 46,
        "Question": "What is 'transaction isolation level'?",
        "Answers": { 
            "answer_a": "The degree to which transactions are isolated from each other", 
            "answer_b": "The speed of data access in transactions", 
            "answer_c": "The encryption level of transaction data", 
            "answer_d": "The frequency of transaction backups"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 47,
        "Question": "What is 'foreign key constraint'?",
        "Answers": { 
            "answer_a": "A rule enforcing referential integrity between tables", 
            "answer_b": "A constraint on data encryption", 
            "answer_c": "A constraint on data indexing", 
            "answer_d": "A constraint on data backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 48,
        "Question": "What is 'data normalization'?",
        "Answers": { 
            "answer_a": "Organizing data to reduce redundancy and improve integrity", 
            "answer_b": "Encrypting data to enhance security", 
            "answer_c": "Indexing data to improve query performance", 
            "answer_d": "Backing up data for recovery"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 49,
        "Question": "What is 'stored procedure'?",
        "Answers": { 
            "answer_a": "A precompiled SQL statement stored in the database", 
            "answer_b": "A SQL statement executed in real-time", 
            "answer_c": "A method for encrypting SQL queries", 
            "answer_d": "A form of data backup"
        },
        "correct_answer": "answer_a"
    },
    {
        "Qid": 50,
        "Question": "What is a 'transaction log' used for?",
        "Answers": { 
            "answer_a": "Recording all changes for recovery and rollback", 
            "answer_b": "Encrypting transaction data", 
            "answer_c": "Indexing transaction queries", 
            "answer_d": "Backing up transaction data"
        },
        "correct_answer": "answer_a"
    }
]
module.exports = quest