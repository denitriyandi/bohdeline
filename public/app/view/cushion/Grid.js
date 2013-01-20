Ext.define('CrudExt.view.cushion.Grid',{
    extend      : 'Ext.grid.Panel',
    title       : 'List Cushion',
    itemId      : 'cushionGrid',
    xtype       : 'cushionGrid',
    alias       : 'widget.cushionGrid',
    store       : 'Cushions',
    columnLines     : true,    

    initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'ID Cushion', dataIndex: 'id_cushion' },
                { header: 'Nama Cushion', dataIndex: 'nama_cushion' },
                { header: 'Jenis Cushion', dataIndex: 'id_jenis_cushion' },
                { header: 'Bahan Mentah', dataIndex: 'id_bahan_mentah' },
                { header: 'Keb. Bahan Mentah', dataIndex: 'kebutuhan_bahan_mentah' },
                { header: 'Busa', dataIndex: 'id_busa' },
                { header: 'Keb. Busa', dataIndex: 'kebutuhan_busa' },
                { header: 'Kain', dataIndex: 'id_kain' },
                { header: 'Keb. Kain', dataIndex: 'kebutuhan_kain' },
                { header: 'Harga Jual', dataIndex: 'harga_jual' }
            ];
            this.dockedItems = [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Tambah Cushion',
                            iconCls: 'add',
                            action: 'add'
                        },'-',
                        {
                            text: 'Delete Cushion',
                            iconCls: 'delete',
                            action: 'delete'
                        },'-',
                        {
                            text: 'Edit Cushion',
                            iconCls: 'edit',
                            action: 'edit'
                        },'->',
                        {
                            xtype : 'trigger',
                            itemId : 'cushionGridTrigger',
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
                    store: 'Cushions',
                    dock: 'bottom',
                    displayInfo: false,
                    plugins: Ext.create('Ext.ux.SlidingPager', {})
                }
            ];
            this.callParent(arguments);
    }
});