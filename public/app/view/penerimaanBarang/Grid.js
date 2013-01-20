Ext.define('CrudExt.view.penerimaanBarang.Grid',{
	extend      : 'Ext.grid.Panel',	
	itemId		: 'busaGrid',
	xtype		: 'busaGrid',
    alias       : 'widget.penerimaanBarangGrid',
	store 		: '',
    layout      : 'fit',
    margin      : '-15 -15 -15 -15',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'No',  dataIndex:'' },
                { header: 'Nama Item',  dataIndex:'' },
                { header: 'Qty',  dataIndex:'' },
                { header: 'Satuan',  dataIndex:'' }                
            ];            
            this.callParent(arguments);
	}
});