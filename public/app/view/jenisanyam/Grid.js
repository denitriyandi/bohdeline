Ext.define('CrudExt.view.jenisAnyam.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Kategori Jenis Anyam',
	itemId		: 'jenisAnyamGrid',
	xtype		: 'jenisAnyamGrid',
    alias       : 'widget.jenisAnyamGrid',
	store 		: 'JenisAnyams',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_jenis_anyam' },
                { header: 'Nama',  dataIndex: 'nama_jenis_anyam' }                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Jenis Anyam',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Jenis Anyam',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Jenis Anyam',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'jenisAnyamGridTrigger',
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
                    store: 'JenisAnyams',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});