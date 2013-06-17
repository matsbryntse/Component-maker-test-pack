StartTest(function(t) {

    Ext.Loader.setConfig({
        enabled             : true, 
        disableCaching      : false 
    });
    
    var extFolder = t.getExtBundleFolder();

    if (!extFolder) {
        t.fail('Ext JS folder not found');
        return;
    }

    Ext.Loader.setPath('My', '../lib')
    Ext.Loader.setPath('Ext', extFolder + '/src')
    Ext.Loader.setPath('Ext.core', extFolder + '/src/core/src')

    t.requireOk([
        'My.view.ScrumPanel'
    ], function () {
        var as = t.beginAsync();

        Ext.onReady(function() {
            t.endAsync(as);
            t.ok(My.view.ScrumPanel, "My.view.ScrumPanel is here")

            var userStore = new Ext.data.Store({
                model : 'DEMO.model.User',
                proxy : 'memory'
            })

            var taskStore = new Ext.data.Store({
                model : 'DEMO.model.Task',
                proxy : 'memory'
            });


            new My.view.ScrumPanel({
                renderTo : document.body,
                userStore : userStore,
                taskStore : taskStore
            })
        })
    })
})    
