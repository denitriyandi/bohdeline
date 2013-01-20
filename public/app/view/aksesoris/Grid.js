Ext.define('CrudExt.view.aksesoris.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Aksesoris',
	itemId		: 'aksesorisGrid',
	xtype		: 'aksesorisGrid',
    alias       : 'widget.aksesorisGrid',
	store 		: 'Aksesoris',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex:'id_acc' },
                { header: 'Nama Acc',  dataIndex:'nama_acc' },
                { header: 'ID Kat Acc',  dataIndex:'id_kategori_acc' },
                { header: 'ID Warna Pabrik',  dataIndex:'id_warna_pabrik' },
                { header: 'Ukuran',  dataIndex:'ukuran' },
                { header: 'Satuan',  dataIndex:'satuan' },
                { header: 'ID Supplier',  dataIndex:'id_supplier' },
                { header: 'Stok',  dataIndex:'stok' },
                { header: 'Harga Jual',  dataIndex:'harga_jual' },
                { header: 'Harga Beli',  dataIndex:'harga_beli' },
                { header: 'Remark',  dataIndex:'remark' }
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Aksesoris',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Aksesoris',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Aksesoris',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'aksesorisGridTrigger',
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
                    store: 'Aksesoris',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});