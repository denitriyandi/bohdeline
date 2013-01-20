Ext.define('CrudExt.view.busa.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Busa',
	itemId		: 'busaGrid',
	xtype		: 'busaGrid',
    alias       : 'widget.busaGrid',
	store 		: 'Busas',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex:'id_busa' },
                { header: 'Nama',  dataIndex:'nama_busa' },
                { header: 'Warna',  dataIndex:'warna' },
                { header: 'Dimensi',  dataIndex:'dimensi' },
                { header: 'Satuan Dimensi',  dataIndex:'satuan_dimensi' },
                { header: 'Density',  dataIndex:'density' },
                { header: 'Stok',  dataIndex:'stok' },
                { header: 'ID Supplier',  dataIndex:'id_supplier' },
                { header: 'Remark',  dataIndex:'remark' }                             
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Busa',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Busa',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Busa',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'busaGridTrigger',
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
                    store: 'Busas',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});