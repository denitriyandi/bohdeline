Ext.define('CrudExt.view.katsupplier.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Kategori Supplier',
	itemId		: 'katsupplierGrid',
	xtype		: 'katsupplierGrid',
    alias       : 'widget.katsupplierGrid',
	store 		: 'KatSuppliers',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_kategori_supplier' },
                { header: 'Nama',  dataIndex: 'nama_kategori_supplier' }                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Kategori Supplier',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Kategori Supplier',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Kategori Supplier',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'katSupplierGridTrigger',
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
                    store: 'KatSuppliers',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});