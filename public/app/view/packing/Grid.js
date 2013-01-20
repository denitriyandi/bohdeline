Ext.define('CrudExt.view.packing.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Packing',
	itemId		: 'packingGrid',
	xtype		: 'packingGrid',
    alias       : 'widget.packingGrid',
	store 		: 'Packings',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID', dataIndex:'id_packing' },
                { header: 'Nama Packing', dataIndex:'nama_packing' },
                { header: 'Jenis Packing', dataIndex:'id_jenis_packing' },
                { header: 'Warna Pabrik', dataIndex:'id_warna_pabrik' },
                { header: 'Ukuran', dataIndex:'ukuran' },
                { header: 'Bobot', dataIndex:'bobot' },
                { header: 'Satuan', dataIndex:'satuan' },
                { header: 'Stok', dataIndex:'stok' },
                { header: 'Supplier', dataIndex:'id_supplier' },
                { header: 'Remark', dataIndex:'remark' }
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Packing',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Packing',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Packing',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'packingGridTrigger',
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
                    store: 'Packings',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});