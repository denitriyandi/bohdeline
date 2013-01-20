Ext.define('CrudExt.view.bahanAnyam.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Bahan Anyams',
	itemId		: 'bahanAnyamGrid',
	xtype		: 'bahanAnyamGrid',
    alias       : 'widget.bahanAnyamGrid',
	store 		: 'BahanAnyams',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID Plastik', dataIndex: 'id_plastik' },
                { header: 'Nama Plastik', dataIndex: 'nama_plastik' },
                { header: 'ID Jenis Plastik', dataIndex: 'id_jenis_bahan_plastik' },
                { header: 'Lebar', dataIndex: 'lebar_plastik' },
                { header: 'ID Warna Pabrik', dataIndex: 'id_warna_pabrik' },
                { header: 'Satuan Lebar', dataIndex: 'satuan_lebar_plastik' },
                { header: 'Stok', dataIndex: 'stok' },
                { header: 'Satuan', dataIndex: 'satuan' },
                { header: 'ID Supplier', dataIndex: 'id_supplier' },
                { header: 'Harga', dataIndex: 'harga' },
                { header: 'Remark', dataIndex: 'remark' }
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Bahan Anyam',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Bahan Anyam',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Bahan Anyam',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'bahanAnyamGridTrigger',
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
                    store: 'BahanAnyams',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});