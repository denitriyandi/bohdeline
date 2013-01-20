Ext.define('CrudExt.view.item.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Item',
	itemId		: 'itemGrid',
	xtype		: 'itemGrid',
    alias       : 'widget.itemGrid',
	store 		: 'Items',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex:'id_item' },
                { header: 'Nama',  dataIndex:'nama_item' },
                { header: 'Stok',  dataIndex:'stok' },
                { header: 'Harga Jasa Anyam',  dataIndex:'harga_jasa_anyam' },
                { header: 'Harga Jasa Rangka Bending',  dataIndex:'harga_jasa_rangka_bending' },
                { header: 'Harga Jasa Rangka Las',  dataIndex:'harga_jasa_rangka_las' },
                { header: 'Harga Jasa Cushion',  dataIndex:'harga_jasa_cushion' },
                { header: 'Harga Jasa Packing',  dataIndex:'harga_jasa_packing' },
                { header: 'Harga Item',  dataIndex:'harga_item' }
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Item',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Item',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Item',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'itemGridTrigger',
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
                    store: 'Items',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});