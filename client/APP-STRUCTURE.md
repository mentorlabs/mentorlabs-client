# Component Structure

- Components will adhere to the following naming convention `{Name}.component.tsx`.
  - this will help identify components more easily since we will use components and containers
- Components will live in the Components file in `src/Components`
  - Each Component file will have the structure:
    ```
        Component
            - {Name}.component.ts
            - {Name}.scss
            - {Name}.test.js
            - index.ts
    ```
- The index file will export the component file:
  ```
  export * from './{Name}.component'
  ```

# Container Structure

- Will follow similar convention to Components, `{Name}.container.tsx`

# Barrel Files for Components

- We will use barrel files to make importing of components easier.
- The overall Component file will have an index file which wille export all Components for use:
  ```
      export * from "./{Name}"
  ```
  This will allow us to import components as:
  `import {Name} from './Components`, thus eliminating long imports
