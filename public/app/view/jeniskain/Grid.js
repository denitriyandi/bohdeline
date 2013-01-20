Ext.define('CrudExt.view.jeniskain.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Jenis Kain',
	itemId		: 'jeniskainGrid',
	xtype		: 'jeniskainGrid',
    alias       : 'widget.jeniskainGrid',
	store 		: 'JenisKains',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_jenis_kain' },
                { header: 'Nama',  dataIndex: 'nama_jenis_kain' }                                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Jenis Kain',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Jenis Kain',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Jenis Kain',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'jeniskainGridTrigger',
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
                    store: 'JenisKains',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});