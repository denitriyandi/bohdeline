Ext.define('CrudExt.view.pengesub.Grid',{
	extend      : 'Ext.grid.Panel',
	title		: 'List Pengesub',
	itemId		: 'pengesubGrid',
	xtype		: 'pengesubGrid',
    alias       : 'widget.pengesubGrid',
	store 		: 'Pengesubs',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID',  dataIndex: 'id_pengesub' },
                { header: 'Nama',  dataIndex: 'nama_pengesub'},
                { header: 'Kategori Pengesub',  dataIndex: 'id_jenis_sub'},
                { header: 'Alamat',  dataIndex: 'alamat'},
                { header: 'Telepon',  dataIndex: 'telp'},
                { header: 'Jumlah Pekerja',  dataIndex: 'jumlah_pekerja'},
                { header: 'Keterangan',  dataIndex: 'keterangan'}

            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Pengesub',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Pengesub',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Pengesub',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                             xtype : 'trigger',
                            itemId : 'pengesubGridTrigger',
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
                    store: 'Pengesubs',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
	}
});