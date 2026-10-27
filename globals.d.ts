// Resolved error below:
// Cannot find module or type declarations for side-effect import of “./globals.css”.

// Why:
// TypeScript does not include built-in type declarations for CSS side-effect imports.
// TypeScript still needs to be explicitly told how to treat these imports during type checking.
// This change does not affect runtime behavior.
// It only resolves a type-checking issue and improves the developer experience.

declare module '*.css';

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
