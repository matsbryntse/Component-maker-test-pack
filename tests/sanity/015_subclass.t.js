describe('Subclassing The Component', function (t) {
    t.expectGlobal('Foo');

    t.it('Should be possible to subclass the components and find overridden values', function (t) {

        Ext.define('Foo.Sub', {
            extend          : 'My.view.ScrumPanel',
            taskSelector    : 'blargh'
        });

        var sub = new Foo.Sub({
            some : 'value'
        });

        t.expect(sub.taskSelector).toBe('blargh');
        t.expect(sub.some).toBe('value');
    })
})
