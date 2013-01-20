Ext.define('CrudExt.view.jenisBahanAnyam.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Jenis Bahan Anyam',
	itemId		: 'jenisBahanAnyamGrid',
	xtype		: 'jenisBahanAnyamGrid',
    alias       : 'widget.jenisBahanAnyamGrid',
	store 		: 'JenisBahanAnyams',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_jenis_bahan_plastik' },
                { header: 'Nama',  dataIndex: 'nama_jenis_bahan_plastik' }                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Jenis Bahan Anyam',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Jenis Bahan Anyam',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Jenis Bahan Anyam',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'jenisBahanAnyamGridTrigger',
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
                    store: 'JenisBahanAnyams',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});