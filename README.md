Component Maker Test Pack
=========================

This is a great getting started test pack for anyone creating custom components for Ext JS or Sencha Touch. This will help yourself and anyone
that will use your component to assert that your component works fine as new releases of it are shipped. It'll also be a good asset when
you try to support a new version of Ext JS. Note that these are only basic smoke tests, which are not a replacement for unit test or functional tests.

Included in this repo is a sample component (in the /lib/ folder) which consists of a few JS classes and a CSS class. This is just to give you an
idea of how the smoke test suite can be useful. See the /examples/ folder for a simple demo of the component.

These 10 sanity tests will assert that:

1. Your namespace is created (build was succesful) and that your component has the expected alias. Checks for global variable leaks are also made.
2. Your component can be loaded on demand with Ext.Loader (using ext-debug.js)
3. Your component doesn't create any global Ext JS overrides
4. It passes basic JsHint rules (no syntax errors, trailing commas, debugger; statements etc)
5. It does not use global style rules ('.x-panel' etc)
6. It can be sub-classed
7. It does not leak any additional components or dom elements
8. It doesn't override any private Ext JS methods in your component superclasses
9. It can be created, destroyed with and without being rendered first
10. It passes a basic monkey test (random interactions with it), should not throw any exceptions.

More test inspiration to be found at http://www.bryntum.com/products/siesta.