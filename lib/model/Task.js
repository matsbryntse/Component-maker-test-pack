Ext.define('My.model.Task', {
    extend : 'Ext.data.Model',

    States : {
        "0" : 'NotStarted',
        "1" : 'InProgress',
        "2" : 'Test',
        "3" : 'Done'
    },

    fields : [
        { name : 'name' },
        { name : 'state', type : 'int' },
        { name : 'nbrComments', type : 'int' },
        { name : 'userId' },
        { name : 'userName' },
        { name : 'userImg' }
    ],

    isValidTransition : function(toState) {
        var toStateName = this.States[toState];

        switch(this.States[this.data.state]){
            case 'NotStarted':
                return toStateName == "InProgress";
            case 'InProgress':
                return toStateName != "Done";
            case 'Test':
                return toStateName != "NotStarted";
            case 'Done':
                return toStateName == "Test";

            throw 'Invalid to state ' + toState;
        }
    }
});