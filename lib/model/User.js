Ext.define('My.model.User', {
    extend     : 'Ext.data.Model',
    idProperty : 'id',

    fields : [
        { name : 'id' },
        { name : 'name' },
        { name : 'email' },
        { name : 'img' }
    ]
});