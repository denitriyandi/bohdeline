Ext.define('CrudExt.view.permintaanBahan.Grid',{
	extend      : 'Ext.grid.Panel',	
	itemId		: 'busaGrid',
	xtype		: 'busaGrid',
    alias       : 'widget.permintaanBahanGrid',
	store 		: '',
    layout      : 'fit',
    margin      : '-15 -15 -15 -15',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'No',  dataIndex:'' },
                { header: 'Nama Bahan',  dataIndex:'' },
                { header: 'Jumlah Kebutuhan',  dataIndex:'' }
            ];            
            this.callParent(arguments);
	}
});