Ext.define('CrudExt.view.spkAnyam.Grid',{
	extend      : 'Ext.grid.Panel',	
	itemId		: 'busaGrid',
	xtype		: 'busaGrid',
    alias       : 'widget.spkAnyamGrid',
	store 		: '',
    layout      : 'fit',
    margin      : '-15 -15 -15 -15',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'No',  dataIndex:'' },
                { header: 'Nama Barang',  dataIndex:'' },
                { header: 'Material',  dataIndex:'' },
                { header: 'Qty',  dataIndex:'' },
                { header: 'Keterangan',  dataIndex:'' }
            ];            
            this.callParent(arguments);
	}
});