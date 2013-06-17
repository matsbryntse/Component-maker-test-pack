Component Maker Test Pack
=========================

A getting started test pack for anyone creating custom components for Ext JS or Sencha Touch. These 10 sanity tests will assert that:

1. Your namespace is created (build was succesfull)
2. Your component can be loaded on demand with Ext.Loader (using ext-debug.js)
3. Your component doesn't create any global Ext JS overrides
4. It passes basic JsHint rules (no syntax errors, trailing commas, debugger; statements etc)
5. It does not use global style rules ('.x-panel' etc)
6. Can be sub-classed
7. It does not leak any additional components or dom elements
8. It doesn't override any private Ext JS methods in your component superclasses
9. It can be created, destroyed with and without being rendered first
10. It passes a basic monkey test (random interactions with it), should not throw any exceptions.

More test inspiration to be found at http://www.bryntum.com/products/siesta.