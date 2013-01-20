Ext.define('CrudExt.view.jenisBahanMentahCushion.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Jenis Bahan Mentah Cushion',
	itemId		: 'jenisBahanMentahCushionGrid',
	xtype		: 'jenisBahanMentahCushionGrid',
    alias       : 'widget.jenisBahanMentahCushionGrid',
	store 		: 'JenisBahanMentahCushions',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_jenis_bahan_mentah' },
                { header: 'Nama',  dataIndex: 'nama_jenis_bahan_mentah' }                                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Jenis Bahan Mentah Cushion',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Jenis Bahan Mentah Cushion',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Jenis Bahan Mentah Cushion',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'jenisBahanMentahCushionGridTrigger',
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
                    store: 'JenisBahanMentahCushions',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});