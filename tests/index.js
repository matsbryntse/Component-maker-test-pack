/*
 * FOR THE TESTS TO WORK, YOU NEED TO HAVE YOUR EXT JS SDK FOLDER ON THE SAME LEVEL AS THE COMPONENT FOLDER
 */

var Harness = Siesta.Harness.Browser.ExtJS;
var extRoot = '../../extjs-4.2.0/';

Harness.configure({
    title : 'Awesome Component Test Suite',

    disableCaching   : false,
    autoCheckGlobals : true,
    keepResults      : false,
    expectedGlobals  : [
        // YOUR GLOBAL NAMESPACE SHOULD GO HERE
        'My'
    ],

    // LIST YOUR FRAMEWORK EPENDENCIES FIRST, THEN YOUR APPLICATION FILES
    preload : [
        extRoot + 'ext-all-debug.js',
        extRoot + 'resources/css/ext-all.css',

        // Your CSS file(s), normally you'd have your myapp-all-debug.css here
        '../resources/css/ScrumPanel.css',

        // Your JS file(s), normally you'd have your myapp-all-debug.js here
        '../lib/model/Task.js',
        '../lib/model/User.js',
        '../lib/View/ScrumColumn.js',
        '../lib/View/ScrumPanel.js'
    ]
});

Harness.start({
    group : 'Sanity tests',

    items : [
        'sanity/010_sanity.t.js',
        {
            url     : 'sanity/011_on_demand.t.js',
            preload : [ extRoot + "ext-debug.js" ]
        },
        'sanity/012_no_overrides.t.js',
        {
            url         : 'sanity/013_lint.t.js',
            alsoPreload : [ "sanity/jshint.js" ]
        },
        {
            url     : 'sanity/014_unscoped_css_rules.t.js',
            preload : [
                extRoot + 'ext-all-debug.js',
                '../resources/css/ScrumPanel.css'
            ]
        },
        'sanity/015_subclass.t.js',
        'sanity/016_dom_footprint.t.js',
        {
            alsoPreload : ["sanity/symbols.js"],
            url         : 'sanity/017_private_method_overrides.t.js'
        },
        'sanity/018_lifecycle.t.js',
        'sanity/019_monkey_test.t.js'
    ]
});
