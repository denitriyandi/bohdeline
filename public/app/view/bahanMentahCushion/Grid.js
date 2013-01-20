Ext.define('CrudExt.view.bahanMentahCushion.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Bahan Mentah Cushion',
	itemId		: 'bahanMentahCushionGrid',
	xtype		: 'bahanMentahCushionGrid',
    alias       : 'widget.bahanMentahCushionGrid',
	store 		: 'BahanMentahCushions',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex:'id_bahan_mentah' },
                { header: 'Nama',  dataIndex:'nama_bahan_mentah' },
                { header: 'ID Jenis Bahan',  dataIndex:'id_jenis_bahan_mentah' },
                { header: 'Ukuran',  dataIndex:'ukuran' },
                { header: 'Satuan',  dataIndex:'satuan' },
                { header: 'Stok',  dataIndex:'stok' },
                { header: 'ID Supplier',  dataIndex:'id_supplier' },
                { header: 'Remark',  dataIndex:'remark'}
                             
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Bahan Mentah Cushion',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Bahan Mentah Cushion',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Bahan Mentah Cushion',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                            xtype : 'trigger',
                            itemId : 'bmGridTrigger',
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
                    store: 'BahanMentahCushions',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});