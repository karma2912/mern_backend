const quest = [
  {
      "Qid": 1,
      "Question": "What does DBMS stand for?",
      "Answers": { 
          "answer_a": "Database Management System", 
          "answer_b": "Data Backup System", 
          "answer_c": "Database Modeling Software", 
          "answer_d": "Data Management Software"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 2,
      "Question": "Which of the following is a DBMS example?",
      "Answers": { 
          "answer_a": "MySQL", 
          "answer_b": "HTML", 
          "answer_c": "Java", 
          "answer_d": "CSS"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 3,
      "Question": "What is a database?",
      "Answers": { 
          "answer_a": "A collection of data", 
          "answer_b": "A computer program", 
          "answer_c": "A type of network", 
          "answer_d": "A storage device"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 4,
      "Question": "What is a table in a database?",
      "Answers": { 
          "answer_a": "A collection of rows and columns", 
          "answer_b": "A set of indexes", 
          "answer_c": "A data file", 
          "answer_d": "A query result"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 5,
      "Question": "Which SQL command is used to retrieve data?",
      "Answers": { 
          "answer_a": "SELECT", 
          "answer_b": "INSERT", 
          "answer_c": "UPDATE", 
          "answer_d": "DELETE"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 6,
      "Question": "What is a row in a database table called?",
      "Answers": { 
          "answer_a": "Tuple", 
          "answer_b": "Field", 
          "answer_c": "Column", 
          "answer_d": "Record"
      },
      "correct_answer": "answer_d"
  },
  {
      "Qid": 7,
      "Question": "What is a column in a database table called?",
      "Answers": { 
          "answer_a": "Field", 
          "answer_b": "Tuple", 
          "answer_c": "Record", 
          "answer_d": "Row"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 8,
      "Question": "What does SQL stand for?",
      "Answers": { 
          "answer_a": "Structured Query Language", 
          "answer_b": "Standard Query Language", 
          "answer_c": "Simple Query Language", 
          "answer_d": "Secure Query Language"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 9,
      "Question": "What is the purpose of the 'WHERE' clause in SQL?",
      "Answers": { 
          "answer_a": "To filter records", 
          "answer_b": "To sort records", 
          "answer_c": "To group records", 
          "answer_d": "To update records"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 10,
      "Question": "What is a primary key?",
      "Answers": { 
          "answer_a": "A unique identifier for a record", 
          "answer_b": "A key to link tables", 
          "answer_c": "A type of constraint", 
          "answer_d": "A column with default values"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 11,
      "Question": "Which SQL statement is used to create a new table?",
      "Answers": { 
          "answer_a": "CREATE TABLE", 
          "answer_b": "ADD TABLE", 
          "answer_c": "INSERT TABLE", 
          "answer_d": "NEW TABLE"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 12,
      "Question": "What does a foreign key do?",
      "Answers": { 
          "answer_a": "Links tables together", 
          "answer_b": "Defines unique constraints", 
          "answer_c": "Creates indexes", 
          "answer_d": "Stores data"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 13,
      "Question": "What is normalization?",
      "Answers": { 
          "answer_a": "Organizing data to reduce redundancy", 
          "answer_b": "Creating data backups", 
          "answer_c": "Encrypting database", 
          "answer_d": "Increasing database size"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 14,
      "Question": "What does the 'INSERT' SQL command do?",
      "Answers": { 
          "answer_a": "Adds new records", 
          "answer_b": "Modifies existing records", 
          "answer_c": "Deletes records", 
          "answer_d": "Retrieves records"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 15,
      "Question": "What is a view in SQL?",
      "Answers": { 
          "answer_a": "A virtual table based on a query", 
          "answer_b": "A physical table", 
          "answer_c": "An index", 
          "answer_d": "A database schema"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 16,
      "Question": "Which SQL command is used to modify data in a table?",
      "Answers": { 
          "answer_a": "UPDATE", 
          "answer_b": "DELETE", 
          "answer_c": "CREATE", 
          "answer_d": "ALTER"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 17,
      "Question": "What is a constraint in SQL?",
      "Answers": { 
          "answer_a": "A rule applied to columns", 
          "answer_b": "A type of query", 
          "answer_c": "A database backup", 
          "answer_d": "A storage structure"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 18,
      "Question": "What does the 'DELETE' SQL command do?",
      "Answers": { 
          "answer_a": "Removes records from a table", 
          "answer_b": "Adds new records", 
          "answer_c": "Modifies existing records", 
          "answer_d": "Retrieves data"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 19,
      "Question": "What is a database schema?",
      "Answers": { 
          "answer_a": "The structure of the database", 
          "answer_b": "A query result", 
          "answer_c": "A data constraint", 
          "answer_d": "A type of index"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 20,
      "Question": "Which command is used to remove a table?",
      "Answers": { 
          "answer_a": "DROP TABLE", 
          "answer_b": "DELETE TABLE", 
          "answer_c": "REMOVE TABLE", 
          "answer_d": "CLEAR TABLE"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 21,
      "Question": "What is an SQL constraint?",
      "Answers": { 
          "answer_a": "A rule to limit data in columns", 
          "answer_b": "A type of index", 
          "answer_c": "A database view", 
          "answer_d": "A storage type"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 22,
      "Question": "What is a database transaction?",
      "Answers": { 
          "answer_a": "A sequence of SQL operations", 
          "answer_b": "A single SQL query", 
          "answer_c": "A data file", 
          "answer_d": "A database backup"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 23,
      "Question": "What does the 'JOIN' keyword do in SQL?",
      "Answers": { 
          "answer_a": "Combines rows from two or more tables", 
          "answer_b": "Filters records", 
          "answer_c": "Sorts data", 
          "answer_d": "Groups records"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 24,
      "Question": "What is an SQL index?",
      "Answers": { 
          "answer_a": "A performance optimization tool", 
          "answer_b": "A data constraint", 
          "answer_c": "A type of table", 
          "answer_d": "A query command"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 25,
      "Question": "Which SQL statement is used to change a table structure?",
      "Answers": { 
          "answer_a": "ALTER TABLE", 
          "answer_b": "UPDATE TABLE", 
          "answer_c": "MODIFY TABLE", 
          "answer_d": "CHANGE TABLE"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 26,
      "Question": "What does the 'GROUP BY' clause do in SQL?",
      "Answers": { 
          "answer_a": "Groups rows that have the same values", 
          "answer_b": "Orders rows in ascending or descending order", 
          "answer_c": "Filters rows based on conditions", 
          "answer_d": "Joins multiple tables"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 27,
      "Question": "What is a stored procedure?",
      "Answers": { 
          "answer_a": "A precompiled SQL statement", 
          "answer_b": "A data file", 
          "answer_c": "A query result", 
          "answer_d": "A database schema"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 28,
      "Question": "What does the 'HAVING' clause do in SQL?",
      "Answers": { 
          "answer_a": "Filters groups based on a condition", 
          "answer_b": "Filters individual rows", 
          "answer_c": "Orders results", 
          "answer_d": "Joins tables"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 29,
      "Question": "What is a data type in SQL?",
      "Answers": { 
          "answer_a": "The type of data that can be stored in a column", 
          "answer_b": "The type of index used", 
          "answer_c": "The type of constraint applied", 
          "answer_d": "The type of SQL command"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 30,
      "Question": "What is the purpose of the 'ORDER BY' clause?",
      "Answers": { 
          "answer_a": "Sorts the result set", 
          "answer_b": "Filters records", 
          "answer_c": "Groups rows", 
          "answer_d": "Joins tables"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 31,
      "Question": "What is an aggregate function?",
      "Answers": { 
          "answer_a": "A function that performs a calculation on a set of values", 
          "answer_b": "A function to create new tables", 
          "answer_c": "A function to modify table structure", 
          "answer_d": "A function to retrieve individual rows"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 32,
      "Question": "Which SQL function is used to count the number of rows?",
      "Answers": { 
          "answer_a": "COUNT()", 
          "answer_b": "SUM()", 
          "answer_c": "AVG()", 
          "answer_d": "MAX()"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 33,
      "Question": "What is the purpose of the 'DISTINCT' keyword?",
      "Answers": { 
          "answer_a": "Removes duplicate records", 
          "answer_b": "Sorts records", 
          "answer_c": "Filters records", 
          "answer_d": "Joins tables"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 34,
      "Question": "What is a database transaction?",
      "Answers": { 
          "answer_a": "A sequence of operations performed as a single unit", 
          "answer_b": "A single database operation", 
          "answer_c": "A type of index", 
          "answer_d": "A database schema"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 35,
      "Question": "What does the 'LIMIT' clause do in SQL?",
      "Answers": { 
          "answer_a": "Limits the number of rows returned", 
          "answer_b": "Sorts the rows", 
          "answer_c": "Groups rows", 
          "answer_d": "Filters rows"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 36,
      "Question": "What is the purpose of the 'SET' keyword in SQL?",
      "Answers": { 
          "answer_a": "Assigns a value to a column", 
          "answer_b": "Deletes a table", 
          "answer_c": "Creates a new index", 
          "answer_d": "Filters rows"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 37,
      "Question": "What is a database index used for?",
      "Answers": { 
          "answer_a": "Improving query performance", 
          "answer_b": "Enforcing constraints", 
          "answer_c": "Backing up data", 
          "answer_d": "Creating new tables"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 38,
      "Question": "What is the purpose of a 'JOIN' in SQL?",
      "Answers": { 
          "answer_a": "Combine rows from multiple tables", 
          "answer_b": "Filter rows from a single table", 
          "answer_c": "Create a new table", 
          "answer_d": "Sort rows in a table"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 39,
      "Question": "What does the 'ALTER' command do in SQL?",
      "Answers": { 
          "answer_a": "Changes the structure of an existing table", 
          "answer_b": "Deletes a table", 
          "answer_c": "Adds a new table", 
          "answer_d": "Retrieves data from a table"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 40,
      "Question": "What is a database schema?",
      "Answers": { 
          "answer_a": "The structure or design of a database", 
          "answer_b": "A type of data constraint", 
          "answer_c": "An SQL function", 
          "answer_d": "A table view"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 41,
      "Question": "Which SQL clause is used to sort results?",
      "Answers": { 
          "answer_a": "ORDER BY", 
          "answer_b": "GROUP BY", 
          "answer_c": "HAVING", 
          "answer_d": "LIMIT"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 42,
      "Question": "What is a foreign key?",
      "Answers": { 
          "answer_a": "A key used to link two tables", 
          "answer_b": "A unique identifier for a table", 
          "answer_c": "A type of index", 
          "answer_d": "A data type"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 43,
      "Question": "What does the 'SELECT DISTINCT' statement do?",
      "Answers": { 
          "answer_a": "Returns unique rows", 
          "answer_b": "Sorts the rows", 
          "answer_c": "Groups rows", 
          "answer_d": "Combines tables"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 44,
      "Question": "What is an aggregate function in SQL?",
      "Answers": { 
          "answer_a": "A function that performs a calculation on multiple rows", 
          "answer_b": "A function to filter records", 
          "answer_c": "A function to sort records", 
          "answer_d": "A function to update records"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 45,
      "Question": "What is the purpose of the 'COUNT' function in SQL?",
      "Answers": { 
          "answer_a": "Counts the number of rows", 
          "answer_b": "Sums the values in a column", 
          "answer_c": "Finds the average value", 
          "answer_d": "Finds the maximum value"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 46,
      "Question": "What is the 'SUM' function used for in SQL?",
      "Answers": { 
          "answer_a": "Adds up the values in a numeric column", 
          "answer_b": "Counts the number of rows", 
          "answer_c": "Finds the average value", 
          "answer_d": "Finds the maximum value"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 47,
      "Question": "What does the 'AVG' function compute in SQL?",
      "Answers": { 
          "answer_a": "The average value of a numeric column", 
          "answer_b": "The total value of a numeric column", 
          "answer_c": "The highest value in a numeric column", 
          "answer_d": "The lowest value in a numeric column"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 48,
      "Question": "What does the 'MAX' function do in SQL?",
      "Answers": { 
          "answer_a": "Finds the highest value in a numeric column", 
          "answer_b": "Finds the average value in a column", 
          "answer_c": "Finds the total value in a column", 
          "answer_d": "Finds the lowest value in a column"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 49,
      "Question": "What does the 'MIN' function do in SQL?",
      "Answers": { 
          "answer_a": "Finds the lowest value in a numeric column", 
          "answer_b": "Finds the highest value in a column", 
          "answer_c": "Counts the number of rows", 
          "answer_d": "Finds the average value in a column"
      },
      "correct_answer": "answer_a"
  },
  {
      "Qid": 50,
      "Question": "What is the purpose of the 'CREATE' statement in SQL?",
      "Answers": { 
          "answer_a": "Creates a new table or database object", 
          "answer_b": "Updates existing records", 
          "answer_c": "Deletes records", 
          "answer_d": "Retrieves data from a table"
      },
      "correct_answer": "answer_a"
  }
]

module.exports = quest