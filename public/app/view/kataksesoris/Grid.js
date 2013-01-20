Ext.define('CrudExt.view.katAksesoris.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Kategori Aksesoris',
	itemId		: 'katAksesorisGrid',
	xtype		: 'katAksesorisGrid',
    alias       : 'widget.katAksesorisGrid',
	store 		: 'KatAksesoris',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_kategori_acc' },
                { header: 'Nama',  dataIndex: 'nama_kategori' }                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Kategori Aksesoris',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Kategori Aksesoris',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Kategori Aksesoris',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'katAksesorisGridTrigger',
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
                    store: 'KatAksesoris',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});