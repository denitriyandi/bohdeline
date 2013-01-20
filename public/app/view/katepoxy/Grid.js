Ext.define('CrudExt.view.katEpoxy.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Jenis Epoxy',
	itemId		: 'katEpoxyGrid',
	xtype		: 'katEpoxyGrid',
    alias       : 'widget.katEpoxyGrid',
	store 		: 'KatEpoxys',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_jenis_epoxy' },
                { header: 'Nama',  dataIndex: 'nama_jenis_epoxy' }                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Kategori Epoxy',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Kategori Epoxy',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Kategori Epoxy',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'katEpoxyGridTrigger',
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
                    store: 'KatEpoxys',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});