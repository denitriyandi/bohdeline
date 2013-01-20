Ext.define('CrudExt.view.kain.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Cover Cushion',
	itemId		: 'kainGrid',
	xtype		: 'kainGrid',
    alias       : 'widget.kainGrid',
	store 		: 'Kains',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID Kain', dataIndex: 'id_kain' },
                { header: 'Nama Kain', dataIndex: 'nama_kain' },
                { header: 'ID Jenis Kain', dataIndex: 'id_jenis_kain' },
                { header: 'ID Warna Pabrik', dataIndex: 'id_warna_pabrik' },
                { header: 'Stok', dataIndex: 'stok' },
                { header: 'Satuan', dataIndex: 'satuan' },
                { header: 'ID Supplier', dataIndex: 'id_supplier' },
                { header: 'Remark', dataIndex: 'remark' }
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Cover Cushion',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Cover Cushion',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Cover Cushion',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                            xtype : 'trigger',
                            itemId : 'kainGridTrigger',
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
                    store: 'Kains',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});