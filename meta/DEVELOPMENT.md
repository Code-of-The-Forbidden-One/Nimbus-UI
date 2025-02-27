# Development Guide

For consistency in the repository we adhere to strict coding standards. This is essential for allowing maintainability whilst remaining open to any and all contributors. To make things easy we try to make our eslint rules as robust as possible so that you don't need to actively think about it.

## Editors

Whilst you are free to use your preferred editor of choice we recommend using VSCode.
Not only has VSCode become a standard across the industry, due to it's customisabiltiy,
but you will have a far easier time using our suggested extensions allowing VSCode to
flag errors from our linter configuration so that you don't have to deal with the
frustration of submitting code that fails on our pipeline.

- [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

## Markdown

We adhere to the MD standard in all of our Markdown files.

# Best Practices

To ensure high-quality, maintainable, and scalable software, we follow several fundamental principles and methodologies. This document outlines these best practices and their practical application within our codebase.

---

## 1. Fundamental Software Design Principles

### 1.1 SOLID Principles

The **SOLID** principles help in designing maintainable and scalable software by reducing coupling and increasing cohesion.

- **S**ingle Responsibility Principle (SRP): A class or function should have only one reason to change.
- **O**pen/Closed Principle (OCP): Code should be open for extension but closed for modification.
- **L**iskov Substitution Principle (LSP): Objects of a derived class should be replaceable for their base class without affecting functionality.
- **I**nterface Segregation Principle (ISP): No class should be forced to implement methods it does not use.
- **D**ependency Inversion Principle (DIP): Depend on abstractions, not concrete implementations.

**Example (Correct):**

```ts
interface Notifier {
  sendNotification(message: string): void;
}

class EmailNotifier implements Notifier {
  sendNotification(message: string): void {
    console.log(`Email sent: ${message}`);
  }
}
```

**Example (Incorrect - Violates SRP):**

```ts
class NotificationService {
  sendEmail(message: string) {
    console.log(`Email sent: ${message}`);
  }
  sendSMS(message: string) {
    console.log(`SMS sent: ${message}`);
  }
}
```

---

### 1.2 YAGNI (You Ain’t Gonna Need It)

Avoid implementing features **before they are needed**. Code should be lean and solve the present requirements, not future hypotheticals.

**Example (Correct - Implements only needed functionality):**

```ts
function getUserName(user: { firstName: string; lastName: string }) {
  return user.firstName;
}
```

**Example (Incorrect - Implements unnecessary future-proofing):**

```ts
function getUserName(user: { firstName: string; lastName: string; middleName?: string }) {
  return user.middleName ? `${user.firstName} ${user.middleName}` : user.firstName;
}
```

---

### 1.3 KISS (Keep It Simple, Stupid)

Code should be as **simple and readable** as possible. Avoid complexity when a simpler solution exists.

**Example (Correct - Simple & Readable):**

```ts
function isAdult(age: number): boolean {
  return age >= 18;
}
```

**Example (Incorrect - Overly Complex):**

```ts
function isAdult(age: number): boolean {
  return age >= 18 ? true : false;
}
```

---

### 1.4 Good-Enough Programming Solutions

Code should be functional, **not necessarily perfect**. Over-engineering leads to wasted time and complexity.

- Prioritize **working solutions** over abstract perfection.
- **Refactor when necessary**, not prematurely.

**Example (Correct - Meets functional needs):**

```ts
function fetchUserData(userId: number) {
  return fetch(`/api/user/${userId}`).then(res => res.json());
}
```

**Example (Incorrect - Over-engineered for a simple task):**

```ts
class UserDataFetcher {
  constructor(private userId: number) {}
  async fetch() {
    return await fetch(`/api/user/${this.userId}`).then(res => res.json());
  }
}
```

---

## 2. Uncle Bob’s Clean Code Principles

We follow **Robert C. Martin’s Clean Code** guidelines to maintain clarity, simplicity, and maintainability.

- **Meaningful Variable Names:**
  - ✅ `const maxRetries = 5;`
  - ❌ `const x = 5;`
- **Small, Focused Functions:**
  - ✅ `function calculateTotal(items: number[]): number {}`
  - ❌ `function processOrderAndCalculateTotalAndSendInvoice() {}`
- **Avoid Magic Numbers:**
  - ✅ `const MAX_LOGIN_ATTEMPTS = 3;`
  - ❌ `if (attempts > 3) {}`

---

## 3. Naming Conventions

Our codebase follows a strict naming convention for consistency:

| Type           | Convention  | Example |
|---------------|------------|---------|
| Classes & Components | PascalCase | `class UserProfile {}` |
| Variables & Functions | camelCase | `const fetchData = () => {}` |
| Constants     | UPPER_CASE | `const MAX_RETRIES = 5;` |
| Interfaces    | PascalCase | `interface UserProps {}` |

---

## 4. Import Practices & Destructuring Preferences

### 4.1 Prefer Direct Imports

To keep bundle size low, we prefer direct imports instead of destructuring from large libraries.

✅ **Correct:**

```ts
import get from 'lodash/get';
```

❌ **Incorrect:**

```ts
import { get } from 'lodash';
```

### 4.2 Readability Over Performance (Unless Critical)

In most cases, we prioritize **readability and maintainability** over micro-optimizations. Performance optimizations should only be prioritized in performance-critical scenarios.

✅ **Correct (Readable, clear intent):**

```ts
const fullName = `${user.firstName} ${user.lastName}`;
```

❌ **Incorrect (Obscure optimization):**

```ts
const fullName = [user.firstName, user.lastName].join(' ');
```

---

## 5. Test-Driven Development (TDD)

TDD ensures that tests are written **before** implementing functionality. The development process follows the **Red, Amber, Green** system:

1. **Red:** Write a failing test.
2. **Amber:** Implement minimal code to make the test pass.
3. **Green:** Refactor the code while keeping the test passing.

### Example Workflow

✅ **Step 1: Write a Failing Test (RED)**

```ts
describe('isAdult', () => {
  it('should return true for age 18 and above', () => {
    expect(isAdult(18)).toBe(true);
  });
});
```

✅ **Step 2: Implement Minimal Code (AMBER)**

```ts
function isAdult(age: number): boolean {
  return age >= 18;
}
```

✅ **Step 3: Refactor (GREEN)**

```ts
const isAdult = (age: number) => age >= 18;
```

---

## Conclusion

By following these best practices, we ensure that our codebase is **maintainable, scalable, and easy to understand**. All pull requests must adhere to these guidelines.

## Coding Standards

To maintain a clean, consistent, and maintainable codebase, all contributors must adhere to the following coding standards. These rules are enforced via **ESLint**.

### 1. Code Formatting & Style

#### 1.1 Use Single Quotes for Strings

✅ **Correct:**

```ts
const message = 'Hello, world!';
```

❌ **Incorrect:**

```ts
const message = "Hello, world!";
```

#### 1.2 Always Use Semicolons

✅ **Correct:**

```ts
const name = 'John';
console.log(name);
```

❌ **Incorrect:**

```ts
const name = 'John'
console.log(name)
```

#### 1.3 Indentation with 2 Spaces

✅ **Correct:**

```ts
function greet() {
  console.log('Hello');
}
```

❌ **Incorrect:**

```ts
function greet() {
    console.log('Hello');
}
```

#### 1.4 Maximum Line Length: 80 Characters

✅ **Correct:**

```ts
const message =
  'This is a long message that has been wrapped properly for readability.';
```

❌ **Incorrect:**

```ts
const message = 'This is a long message that is too long for a single line.';
```

#### 1.5 Use Trailing Commas for Multiline Objects & Arrays

✅ **Correct:**

```ts
const obj = {
  name: 'John',
  age: 30,
};
```

❌ **Incorrect:**

```ts
const obj = {
  name: 'John',
  age: 30
};
```

---

### 2. Naming Conventions

#### 2.1 Classes & Components Must Use PascalCase

✅ **Correct:**

```ts
class UserProfile {}
const DashboardPage = () => {};
```

❌ **Incorrect:**

```ts
class userProfile {}
const dashboardPage = () => {};
```

#### 2.2 Variables & Functions Must Use camelCase

✅ **Correct:**

```ts
const userData = {};
function fetchData() {}
```

❌ **Incorrect:**

```ts
const UserData = {};
function Fetch_Data() {}
```

#### 2.3 Constants Should Use UPPER_CASE

✅ **Correct:**

```ts
const MAX_RETRIES = 5;
```

❌ **Incorrect:**

```ts
const maxRetries = 5;
```

---

### 3. Best Practices

#### 3.1 Prefer `const` Over `let` Where Possible

✅ **Correct:**

```ts
const age = 30;
```

❌ **Incorrect:**

```ts
let age = 30;
```

#### 3.2 Use Arrow Functions Instead of Function Declarations

✅ **Correct:**

```ts
const fetchData = () => {
  console.log('Fetching data...');
};
```

❌ **Incorrect:**

```ts
function fetchData() {
  console.log('Fetching data...');
}
```

#### 3.3 Use Curly Braces for All Conditionals

✅ **Correct:**

```ts
if (isActive) {
  console.log('Active');
}
```

❌ **Incorrect:**

```ts
if (isActive) console.log('Active');
```

#### 3.4 No Unused Variables

✅ **Correct:**

```ts
function handleEvent(_event: Event) {
  console.log('Event handled');
}
```

❌ **Incorrect:**

```ts
function handleEvent(event: Event) {}
```

#### 3.5 Avoid `any` Type in TypeScript

✅ **Correct:**

```ts
function processInput(input: string): number {
  return parseInt(input, 10);
}
```

❌ **Incorrect:**

```ts
function processInput(input: any): any {
  return input;
}
```

---

### 4. Import Rules

#### 4.1 Sort Imports Alphabetically

✅ **Correct:**

```ts
import fs from 'fs';
import path from 'path';
import { fetchData } from './api';
import { formatData } from './utils';
```

❌ **Incorrect:**

```ts
import { fetchData } from './api';
import path from 'path';
import { formatData } from './utils';
import fs from 'fs';
```

#### 4.2 Use Exact Imports Instead of Destructuring from Packages

✅ **Correct:**

```ts
import get from 'lodash/get';
```

❌ **Incorrect:**

```ts
import { get } from 'lodash';
```

#### 4.3 No Duplicate Imports

✅ **Correct:**

```ts
import { fetchData } from './api';
```

❌ **Incorrect:**

```ts
import { fetchData } from './api';
import { processData } from './api';
```

---

### 5. React-Specific Rules

#### 5.1 React Must Use Function Components

✅ **Correct:**

```tsx
const Button = () => {
  return <button>Click me</button>;
};
```

❌ **Incorrect:**

```tsx
class Button extends React.Component {
  render() {
    return <button>Click me</button>;
  }
}
```

#### 5.2 React Hooks Must Follow Rules of Hooks

✅ **Correct:**

```tsx
function Component() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}
```

❌ **Incorrect:**

```tsx
function Component() {
  if (true) {
    const [count, setCount] = useState(0); // ❌ Hooks cannot be inside conditions
  }
  return <div>{count}</div>;
}
```

#### 5.3 No PropTypes (Use TypeScript Instead)

✅ **Correct:**

```tsx
interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button>{label}</button>;
};
```

---

### 6. Console & Debugging

#### 6.1 No `console.log()` in Code

✅ **Correct:**

```ts
throw new Error('Unexpected error occurred');
```

❌ **Incorrect:**

```ts
console.log('Debugging message');
```

---

### 7. Miscellaneous Rules

- Always use `===` instead of `==` for comparisons.
- Do not use `var`, always use `let` or `const`.
- Do not use `// @ts-ignore` unless absolutely necessary.
- Ensure a newline exists at the end of each file.

---

### Final Note

All PRs will be checked against **ESLint**. If your code does not adhere to these rules, it will fail linting and require fixes before merging.
