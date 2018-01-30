# HW Complexity

## Name: Aditya Bhardwaj
## UNITY ID: ABHARDW2

**TASKS COMPLETED:**

**Per Function:**

- **ParameterCount:** The number of parameters for function. 
- **Returns:** The number of return statements in function.

**For File:**

- **AllConditions:** The total number of conditions in file.
- **String Usage:** How many string literals are used in file.
- **PackageComplexity:** The number of imports used in file.

**Using multiple visitors (50 points).**

- **SimpleCyclomaticComplexity:** The number of if statements/loops + 1.
- **MaxMessageChains:** The max length of a message chain in a function. A message chain can be formed from a method call (), a data access (.), or array access [n]. For example,

// Message Chain: 4

mints.name.toString().split(".")[0];

**Advanced (using parents/etc):**

- **MaxConditions:** The max number of conditions in one statement.
- **MaxNestingDepth:** The max depth of scopes (nested ifs, loops, etc) -- this one is hard, only expect a few to get to do finish this one.