Ext.define('CrudExt.view.tukarFaktur.Grid',{
	extend      : 'Ext.grid.Panel',	
	itemId		: 'busaGrid',
	xtype		: 'busaGrid',
    alias       : 'widget.tukarFakturGrid',
	store 		: '',
    layout      : 'fit',
    margin      : '-15 -15 -15 -15',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'No',  dataIndex:'' },
                { header: 'Deskripsi',  dataIndex:'' },
                { header: 'Harga',  dataIndex:'' },
                { header: 'Keterangan',  dataIndex:'' }                
            ];            
            this.callParent(arguments);
	}
});