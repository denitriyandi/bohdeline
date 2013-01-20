Ext.define('CrudExt.view.supplier.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Supplier',
	itemId		: 'supplierGrid',
	xtype		: 'supplierGrid',
    alias       : 'widget.supplierGrid',
	store 		: 'Suppliers',
    columnLines : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_supplier' },
                { header: 'Nama',  dataIndex: 'nama_supplier' },
                { header: 'Kategori',  dataIndex: 'id_kategori_supplier' },
                { header: 'Alamat',  dataIndex: 'alamat' },
                { header: 'Telepon',  dataIndex: 'telp' },
                { header: 'Hp',  dataIndex: 'Hp' },
                { header: 'Fax',  dataIndex: 'Fax' },
                { header: 'Rekening',  dataIndex: 'No_rek' },
                { header: 'Email',  dataIndex: 'email' },
                { header: 'Ket',  dataIndex: 'keterangan' }
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Supplier',
                            iconCls: 'add',
                            action: 'add'
                        }, '-', 
                        {
                            text: 'Delete Supplier',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-', 
                        {
                            text: 'Edit Supplier',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->', 
                        {
							
                            xtype : 'trigger',
                   			itemId : 'supplierGrid',
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
                    store: 'Suppliers',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});