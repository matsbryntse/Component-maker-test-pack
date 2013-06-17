StartTest(function(t) {

    // clear any existing components created by Ext
    Ext.each(t.cq('*'), function(c) {c.destroy(); })

    var panel = new My.view.ScrumPanel({
        renderTo : document.body
    });

    t.chain(
        { waitFor : 'selector', args : '.scrum-scrumpanel' },

        function() {
            t.selectorNotExists('[class*="undefined"]', 'No "undefined" class selectors found in DOM')
            t.selectorNotExists('[id*="undefined"]', 'No "undefined" ids found in DOM')
            t.selectorNotExists('[class*="null"]', 'No "null" class selectors found in DOM')
            t.selectorNotExists('[id*="null"]', 'No "null" ids found in DOM')

            panel.destroy();
            t.selectorNotExists('[class*="scrum-"]', 'No scrum-XXX selectors found in DOM')
            t.isDeeply(t.cq('*'), [], 'Should not find any components after destroy')
        }
    )
})
