| Rule | Severity | Description | Benefit |
|------|----------|-------------|---------|
| react/jsx-uses-react | off | Disable need for explicit React imports in JSX (React 17+) | Reduces boilerplate code in newer React versions |
| react/react-in-jsx-scope | off | React 17+ does not require React to be in scope | Simplifies JSX usage |
| quotes | error | Enforce single quotes for consistency | Ensures consistent code formatting |
| sort-imports | error | Sort imports alphabetically, but ignore declaration sort | Improves code organization and readability |
| import/order | error | Sort imports by type: built-in, external, internal, etc. | Keeps imports logically structured |
| no-unused-vars | error | Disallow unused variables, except those prefixed with '_' | Prevents unnecessary variables, reducing clutter |
| no-console | error | Disallow console.log but allow console.warn and console.error | Keeps production code clean and secure |
| semi | error | Require semicolons at the end of statements | Prevents automatic semicolon insertion errors |
| comma-dangle | error | Require trailing commas for multi-line objects/arrays | Makes diffs cleaner and reduces syntax errors |
| indent | error | Enforce 2-space indentation | Maintains consistent code structure |
| max-len | warn | Warn when line length exceeds 80 characters | Enhances readability and maintainability |
| prettier/prettier | error | Enforce Prettier formatting rules | Ensures consistent code style |
| eol-last | error | Require a newline at the end of files | Improves version control diffs |
| @typescript-eslint/no-explicit-any | error | Disallow usage of `any` type in TypeScript | Encourages proper TypeScript typing |
| @typescript-eslint/explicit-function-return-type | error | Require return type annotations on functions | Improves type safety and documentation |
| @typescript-eslint/no-unused-vars | error | Same as `no-unused-vars`, but for TypeScript | Helps maintain clean code by preventing unnecessary variables |
| react/prop-types | off | Disable PropTypes enforcement (for TypeScript usage) | Avoids redundancy in TypeScript projects |
| react-hooks/rules-of-hooks | error | Ensure hooks follow React's rules | Prevents common mistakes with hooks |
| react-hooks/exhaustive-deps | error | Require dependencies in useEffect/useCallback | Prevents unintended behavior in effects |
| @typescript-eslint/ban-ts-comment | warn | Warn when using @ts-ignore or @ts-nocheck | Encourages better TypeScript practices |
| no-duplicate-imports | error | Disallow duplicate imports from the same module | Improves import organization and prevents redundancy |
| no-magic-numbers | warn | Warn on magic numbers (except 0 and 1) | Encourages use of constants for clarity |
| curly | error | Require curly braces for all control statements | Improves readability and avoids ambiguity |
| prefer-const | error | Enforce using const instead of let where possible | Encourages immutability for better performance |
| no-throw-literal | error | Disallow throwing non-error values | Ensures proper error handling |
| func-style | error | Enforce function expressions over declarations | Keeps function declarations consistent |
| no-multiple-empty-lines | error | Limit consecutive empty lines to one | Keeps code tidy and compact |
| space-before-function-paren | error | Disallow spaces before function parentheses | Enforces consistent function syntax |
| no-extra-semi | error | Disallow unnecessary semicolons | Prevents syntax redundancy |
| @typescript-eslint/naming-convention | error | Enforce PascalCase for classes, interfaces, and enums | Maintains TypeScript naming consistency |
| import/prefer-default-export | error | Require default exports for modules with a single export | Encourages better module usage |
| import/no-duplicates | error | Disallow duplicate imports | Improves efficiency and readability |
| prefer-arrow/prefer-arrow-functions | error | Prefer arrow functions over regular functions | Improves consistency and readability |
| prefer-destructuring | error | Encourage destructuring for objects | Makes code more concise and readable |
| no-eval | error | Disallow usage of `eval()` for security reasons | Prevents security vulnerabilities |
| react/jsx-props-no-spreading | warn | Discourage JSX prop spreading | Helps prevent unnecessary re-renders |
| react/require-default-props | error | Require default values for optional props | Ensures better component defaults |
| react/jsx-no-useless-fragment | warn | Warn about unnecessary JSX fragments | Simplifies component structure |
| react/jsx-key | error | Require `key` prop when rendering lists | Prevents React re-rendering issues |
| react/no-danger | warn | Warn when using `dangerouslySetInnerHTML` | Prevents potential XSS vulnerabilities |
| no-param-reassign | error | Disallow modifying function parameters | Prevents unintended side effects |
| linebreak-style | error | Enforce Unix-style (LF) line breaks | Ensures cross-platform compatibility |
| no-unneeded-ternary | error | Disallow unnecessary ternary expressions | Encourages simpler code |
| no-cond-assign | error | Disallow assignments in conditional statements | Prevents logical errors |
| no-new | error | Disallow instantiating new objects without assignment | Prevents accidental object creation |
| no-alert | error | Disallow `alert()`, `confirm()`, and `prompt()` | Keeps production code clean and user-friendly |
| react/jsx-no-bind | error | Disallow inline functions in JSX | Prevents unnecessary re-renders |
| react/no-unescaped-entities | warn | Warn about unescaped HTML entities in JSX | Ensures correct rendering of special characters |
| react/boolean-prop-naming | error | Enforce boolean prop naming conventions | Improves code readability and consistency |
| require-await | error | Disallow async functions without `await` | Prevents incorrect async behavior |
| no-implied-eval | error | Disallow implicit `eval()` in `setTimeout`/`setInterval` | Improves security |
| default-case | error | Require `default` case in `switch` statements | Prevents unhandled cases in switch statements |
| max-statements-per-line | error | Limit multiple statements per line | Improves readability |
| no-commented-out-code | warn | Discourage commented-out code | Keeps the codebase clean and relevant |
| import/newline-after-import | error | Require a newline after import statements | Improves readability and organization |
| max-lines | warn | Limit number of lines per file | Encourages modular code |
| max-lines-per-function | warn | Limit number of lines per function | Encourages smaller, manageable functions |
| complexity | warn | Limit cyclomatic complexity | Helps keep functions simple and readable |
| import/no-cycle | error | Prevent import cycles | Avoids circular dependencies |
| no-unnecessary-condition | error | Disallow unnecessary conditions in if statements | Improves logic clarity |
| no-else-return | error | Disallow unnecessary else blocks when return is used | Encourages guard statements for cleaner, less-nested code |
| react/style-prop-object | error | Enforce using className over inline style | Improves maintainability, performance, and consistency |

