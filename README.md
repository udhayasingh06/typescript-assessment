# typescript-assessment

This project is a TypeScript assessment.

# Prerequisites

-   Node.js (v16 or later)
-   npm (v7 or later)

# Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/udhayasingh06/typescript-assessment.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd typescript-assessment
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

# Running the Application

To start the application, run the following command:

```bash
npm start
```

This command will execute the main TypeScript script located in the `src` directory.

# Running Tests

To run the test suite, use the following command:

```bash
npm test
```

This command will execute the test scripts located in the `test` directory.

# Git Commit Hooks

This project is configured with a pre-commit hook that automatically runs the test suite before each commit. This ensures that all tests pass before any code is committed to the repository.

If any tests fail, the commit will be aborted, and you will need to fix the failing tests before committing again.
