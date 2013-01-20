Ext.define('CrudExt.view.frame.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List frame',
	itemId		: 'frameGrid',
	xtype		: 'frameGrid',
    alias       : 'widget.frameGrid',
	store 		: 'Frames',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID Pipa', dataIndex:'id_pipa' },
                { header: 'Nama Pipa', dataIndex:'nama_pipa' },
                { header: 'ID Jenis Pipa', dataIndex:'id_jenis_pipa' },
                { header: 'ID Warna Pabrik', dataIndex:'id_warna_pabrik' },
                { header: 'Ukuran', dataIndex:'ukuran' },
                { header: 'Ketebalan', dataIndex:'ketebalan' },
                { header: 'Diameter', dataIndex:'diameter' },
                { header: 'Stok', dataIndex:'stok' },
                { header: 'Satuan', dataIndex:'satuan' },
                { header: 'ID Supplier', dataIndex:'id_supplier' },
                { header: 'Remark', dataIndex:'remark' }
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah frame',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete frame',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit frame',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'frameGridTrigger',
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
                    store: 'Frames',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});