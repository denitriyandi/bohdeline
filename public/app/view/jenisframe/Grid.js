Ext.define('CrudExt.view.jenisFrame.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Jenis Frame',
	itemId		: 'jenisFrameGrid',
	xtype		: 'jenisFrameGrid',
    alias       : 'widget.jenisFrameGrid',
	store 		: 'JenisFrames',    
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_jenis_pipa' },
                { header: 'Bahan',  dataIndex: 'bahan' }                                
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Jenis Frame',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Jenis Frame',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Jenis Frame',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'jenisFrameGridTrigger',
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
                    store: 'JenisFrames',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});