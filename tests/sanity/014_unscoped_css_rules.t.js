StartTest(function(t) {

    // YOUR COMPONENT CSS PREFIX
    var scopingRe = /scrum-/;

    var isGarbageBrowser = !Object.keys || ![].forEach;
    var found = 0;
    var rules = Object.keys(Ext.util.CSS.getRules(true));

    if (isGarbageBrowser) return;

    rules.forEach(function(rule) {
        if (!rule.match(scopingRe)) {
            t.fail('Found unscoped rule: ' + rule);
            found++;
        }
    });

    t.is(found, 0, rules.length + ' CSS rules found. Should find only rules scoped with "scrum-xxx"');
})
