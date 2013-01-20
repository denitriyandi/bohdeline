Ext.define('CrudExt.view.rekapitulasiAnggaran.Grid',{
	extend      : 'Ext.grid.Panel',	
	itemId		: 'busaGrid',
	xtype		: 'busaGrid',
    alias       : 'widget.rekapitulasiAnggaranGrid',
	store 		: '',
    layout      : 'fit',
    margin      : '-15 -15 -15 -15',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'No',  dataIndex:'' },
                { header: 'No QC',  dataIndex:'' },
                { header: 'Nominal',  dataIndex:'' },
                { header: 'Pembayaran',  dataIndex:'' },                
            ];            
            this.callParent(arguments);
	}
});