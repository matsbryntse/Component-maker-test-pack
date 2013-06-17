StartTest(function(t) {
    
    t.expectGlobals('JSHINT');
    
    var getFile     = function (url, callback) {
        var as  = t.beginAsync();
        
        Ext.Ajax.request({
            url         : url,
            callback    : function(options, success, response) { 
                t.endAsync(as);
                
                if (!success) {
                    t.fail('File [' + url + '] failed to load');
                }
                
                success && callback && callback(response.responseText)
            }
        })
    }

    function lintFile(url) {
        getFile(url, Ext.Function.pass(assertLint, [url]));
    }

    function assertLint(file, sourceText) {
        var myResult = JSHINT(sourceText, {
            "onecase"   : true,
            "debug"     : false,
            "asi"       : false,
            "supernew"  : false,
            "expr"      : true,         // allow fn && fn()
            "loopfunc"  : true,
            "eqnull"    : true,
            "boss"      : true
        });

        t.notOk(sourceText.match('console.log'), 'Should not find console.log in code!');

        if (myResult) {
            t.pass('No lint errors found');
        } else {
            Ext.each(JSHINT.errors, function(err) {
                t.fail(err.reason + '(line: ' + err.line + ', char: ' + err.character + ')');
            });
        }
    }

    lintFile('../lib/view/ScrumColumn.js');
    lintFile('../lib/view/ScrumPanel.js');
})
