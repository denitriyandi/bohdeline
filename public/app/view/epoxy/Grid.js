Ext.define('CrudExt.view.epoxy.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Epoxy',
	itemId		: 'epoxyGrid',
	xtype		: 'epoxyGrid',
    alias       : 'widget.epoxyGrid',
	store 		: 'Epoxys',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex:'id_epoxy' },
                { header: 'Nama',  dataIndex:'nama_epoxy' },
                { header: 'ID Jenis Epoxy',  dataIndex:'id_jenis_epoxy' },
                { header: 'ID Warna Pabrik',  dataIndex:'id_warna_pabrik' },
                { header: 'ID Tinner',  dataIndex:'id_tinner' },
                { header: 'ID Warna',  dataIndex:'warna' },
                { header: 'Stok',  dataIndex:'stok' },
                { header: 'Satuan',  dataIndex:'satuan' },
                { header: 'ID Supplier',  dataIndex:'id_supplier' },
                { header: 'Harga',  dataIndex:'harga' },
                { header: 'Remark',  dataIndex:'remark' }
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Epoxy',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Epoxy',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Epoxy',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'epoxyGridTrigger',
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
                    store: 'Epoxys',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});