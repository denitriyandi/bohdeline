Ext.define('CrudExt.view.pengesub.Grid',{
    extend      : 'Ext.grid.Panel',
    title       : 'List Pengesub',
    itemId      : 'pengesubGrid',
    xtype       : 'pengesubGrid',
    alias       : 'widget.pengesubGrid',

    initComponent: function(){
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Pengesub',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Pengesub',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Pengesub',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'pengesubGridTrigger',
                            fieldLabel: 'Cari Data',
                            triggerCls : 'x-form-clear-trigger',
                            emptyText : 'Cari Data Disini',
                            size : 60,
                            minChars : 1,
                            enableKeyEvents : true,
                            onTriggerClick : function(){
                            this.reset();
                            this.fireEvent('triggerClear');
                            }
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',                    
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
    }
});