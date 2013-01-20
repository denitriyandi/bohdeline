Ext.define('CrudExt.view.warna.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Warna',
	itemId		: 'warnaGrid',
	xtype		: 'warnaGrid',
    alias       : 'widget.warnaGrid',
	store 		: 'Warnas',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_warna_pabrik' },
                { header: 'ID Warna Supplier',  dataIndex: 'id_warna_supplier' },
                { header: 'ID Kategori',  dataIndex: 'id_kategori_warna' },
                { header: 'URL Gambar',  dataIndex: 'url_gambar' },
                { header: 'ID Supplier',  dataIndex: 'id_supplier' }                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Warna',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Warna',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Warna',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'warnaGridTrigger',
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
                    store: 'Warnas',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});