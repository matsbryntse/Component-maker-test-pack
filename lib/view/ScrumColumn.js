Ext.define('My.view.ScrumColumn', {
    extend : 'Ext.Panel',

    requires : [
        'Ext.dd.DragZone',
        'Ext.view.View'
    ],

    cls               : 'scrumscrumcolumn',
    flex              : 1,
    layout            : 'fit',
    collapseDirection : 'right',

    state : null,
    store : null,

    ScrumTexts : {
        "0" : 'Not Started',
        "1" : 'In Progress',
        "2" : 'Test',
        "3" : 'Done'
    },

    tools : [
        {
            type    : 'plus',
            handler : function () {
                var pnl = this.up('[store]');
                var store = pnl.store;

                store.add({
                    name  : 'New Task...',
                    state : pnl.state
                });
            }
        },
        {
            type    : 'minimize',
            handler : function () {
                this.up('panel').collapse();
            }
        }
    ],

    taskBodyTpl : '<div class="scrumcolor"></div>' +
        '<div class="scrumtask-name">{name}</div>' +
        '<img src="{userImg}" class="scrumuser-avatar {[values.userImg ? \"\" : \"scrumno-img\"]}" />',

    taskToolTpl : '<div class="scrumtool-ct">' +
        '<div class="scrumtool scrumtool-comment {[ values.nbrComments > 0 ? \"\" : \"x-hidden\"]}">{nbrComments}</div>' +
        '</div>',

    initComponent : function () {
        var me = this;
        this.title = this.ScrumTexts[this.state];

        this.addCls('state-' + this.state);
        var taskStore = this.store;

        if (typeof this.taskBodyTpl === "string") {
            this.taskBodyTpl = new Ext.XTemplate(this.taskBodyTpl);
        }

        if (typeof this.taskToolTpl === "string") {
            this.taskToolTpl = new Ext.XTemplate(this.taskToolTpl);
        }

        this.items = this.view = new Ext.view.View({
            store        : this.store,
            autoScroll   : true,
            trackOver    : true,
            overItemCls  : 'scrumtask-over',
            itemSelector : '.scrumtask',
            cls          : 'scrumscrum-tasklist',
            tpl          : new Ext.XTemplate(
                '<tpl for=".">',
                '<div class="scrumtask {[values.state !== ' + this.state + ' ? "scrumhidden" : ""]}">',
                '{[this.getInner(values, parent[xindex-1])]}',
                '{[this.getTools(values)]}',
                '<div style="clear:both"></div>',
                '</div>',
                '</tpl>',
                {
                    getInner : function (values, record) {
                        return me.taskBodyTpl.apply(values);
                    }
                },
                {
                    getTools : function (values) {
                        return me.taskToolTpl.apply(values);
                    }
                }
            )
        });

        this.store.on({
            load        : this.refreshTitle,
            datachanged : this.refreshTitle,
            update      : this.refreshTitle,
            add         : this.refreshTitle,
            remove      : this.refreshTitle,
            scope       : this
        });

        this.callParent(arguments);

        this.refreshTitle();
    },

    refreshTitle : function () {
        var me = this;
        var nbrTasks = this.store.queryBy(function (t) {
            return t.data.state == me.state;
        }).length;

        this.setTitle(this.ScrumTexts[this.state] + (nbrTasks ? ' (' + nbrTasks + ')' : ''));
    },

    afterRender : function () {
        this.callParent(arguments);
        var me = this;

        this.dz = new Ext.dd.DragZone(this.id, {
            getDragData : function (e) {
                var target = me.view.findItemByChild(e.getTarget());

                if (target) {
                    var record = me.view.getRecord(target);

                    return {
                        ddel   : target,
                        record : record
                    };
                }
            }
        });
    },

    onDestroy : function () {
        this.dz.destroy();

        this.callParent(arguments);
    }
});
