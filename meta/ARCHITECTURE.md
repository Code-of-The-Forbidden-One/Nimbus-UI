# **Architecture of Nimbus-UI**

Nimbus-UI is designed as a **monorepo**, enabling modular development while maintaining consistency across different frameworks. This structure allows for **independent package imports**, ensuring users only include what they need, which keeps bundle sizes minimal and improves performance.

## **Monorepo Structure**

Nimbus-UI follows a **monorepo** architecture to:

- **Enable Independent Package Imports** – Users can selectively import components from `nimbus-react`, `nimbus-preact`, or `nimbus-react-native` without unnecessary dependencies.
- **Ensure Consistency** – Shared logic lives in `nimbus-core`, preventing code duplication and maintaining alignment across implementations.
- **Simplify Maintenance** – Updates to shared logic propagate across all frameworks automatically.
- **Improve Developer Experience** – A unified repo streamlines CI/CD, testing, and cross-package development.

### **Folder Structure**

- /packages /nimbus-core # Common shared functionality and base components
- /nimbus-react # React-specific wrappers around core components
- /nimbus-preact # Preact-specific wrappers
- /nimbus-react-native # React Native wrappers for mobile support

This approach keeps dependencies minimal while maintaining flexibility and allows end users
to import only what they need.

````import { Button } from "@nimbus-ui/nimbus-react";````

### **Atomic Design Methodology**

Nimbus-UI follows Atomic Design, a structured approach to building UI components that ensures reusability, consistency, and scalability.

#### **Atomic Design Structure**

- Atoms – Fundamental UI elements (e.g., buttons, inputs, icons).
- Molecules – Small compositions of atoms (e.g., input field with label).
- Organisms – Larger, reusable UI components (e.g., navigation bar, card).
- Templates – Arrangements of organisms for specific use cases.
- Pages – Fully composed screens built from templates.

Using Atomic Design helps:

- Encapsulate complexity – Small, reusable components lead to maintainable code.
- Enhance consistency – Ensures a unified design language across applications.
- Improve scalability – New components can be introduced without disrupting the system.

## Core Package & Framework Wrappers

To support multiple frameworks, Nimbus-UI uses a core package (nimbus-core) that contains all shared logic and base components. Each framework-specific package acts as a thin wrapper around the core.

## Why use nimbus-core?

- Reduces Code Duplication – Core logic is implemented once and reused across all frameworks.
- Ensures Consistency – Changes in nimbus-core apply automatically across nimbus-react, nimbus-preact, and nimbus-react-native.
- Easier Maintenance – Fixes and updates in one place benefit all consumers.

## How it Works

The core package (nimbus-core) contains:

- Primitive UI components (e.g., ButtonBase, InputBase).
- Common utilities (e.g., theming, accessibility helpers).
- Shared logic across all frameworks.

Each wrapper package (nimbus-react, nimbus-preact, nimbus-react-native) then adapts the core components to fit its respective framework.

Example (Not a real implementation):

``` TypeScript
// packages/nimbus-core/ButtonBase.tsx
import React from 'react';

interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType; // Allows specifying different elements (e.g., button, link)
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({ children, as: Component = 'button', ...props }) => {
  return <Component {...props}>{children}</Component>;
};

// packages/nimbus-react/Button.tsx
import React from 'react';
import { ButtonBase } from '@nimbus-ui/nimbus-core';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <ButtonBase {...props} />;
};

// packages/nimbus-preact/Button.tsx
import { h } from 'preact';
import { ButtonBase } from '@nimbus-ui/nimbus-core';

export const Button = (props) => {
  return <ButtonBase {...props} />;
};

// packages/nimbus-react-native/Button.tsx
import React from 'react';
import { ButtonBase } from '@nimbus-ui/nimbus-core';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonBase {...props}>
      {({ children }) => (
        <TouchableOpacity {...props}>
          <Text>{children}</Text>
        </TouchableOpacity>
      )}
    </ButtonBase>
  );
};
```

By structuring Nimbus-UI this way, we ensure a modular, flexible, and high-performance design system that works seamlessly across different platforms.

## Supporting Short-Term Contributors

The monorepo architecture and modular design make it easy for contributors to participate, even if they are only involved for a short time. This is achieved through:

- Clear Separation of Responsibilities – Contributors can work on individual framework wrappers (nimbus-react, nimbus-preact, nimbus-react-native) without needing deep knowledge of the entire codebase.
- Encapsulation in nimbus-core – The shared logic is centralized, meaning contributors don’t need to worry about syncing common functionality across multiple packages.
- Minimal Setup Requirements – Each package can be developed and tested in isolation, reducing the learning curve for new contributors.
- Independent Component Contributions – Since components follow Atomic Design, contributors can focus on smaller, self-contained units (atoms, molecules) before moving to more complex structures.

This approach allows new contributors to onboard quickly, make meaningful changes without risk of breaking unrelated components, and ensures that the overall system remains maintainable without a rigidly structured team.
