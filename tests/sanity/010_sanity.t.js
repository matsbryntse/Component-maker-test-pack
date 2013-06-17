StartTest(function(t) {
    
    t.ok(My.view.ScrumPanel, "My.view.ScrumPanel is here")

    t.is(My.view.ScrumPanel.prototype.alias, 'widget.scrumpanel', 'Should find xtype declared');
})
