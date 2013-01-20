Ext.define('CrudExt.view.jenisPengesub.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Kategori Jenis Pengesub',
	itemId		: 'jenisPengesubGrid',
	xtype		: 'jenisPengesubGrid',
    alias       : 'widget.jenisPengesubGrid',
	store 		: 'JenisPengesubs',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_jenis_sub' },
                { header: 'Nama',  dataIndex: 'nama_jenis_sub' }                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Kategori Jenis Pengesub',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Kategori Jenis Pengesub',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Kategori Jenis Pengesub',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                            xtype : 'trigger',
                            itemId : 'jenisPengesubGridTrigger',
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
                    store: 'JenisPengesubs',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});