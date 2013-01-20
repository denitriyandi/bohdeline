Ext.define('CrudExt.view.purchasingOrder.Grid',{
	extend      : 'Ext.grid.Panel',	
	itemId		: 'purchasingOrder',
	xtype		: 'purchasingOrder',
    alias       : 'widget.purchasingOrderGrid',
	store 		: 'PurchaseOrderDetails',
    layout      : 'fit',
    margin      : '-15 -15 -15 -15',
    columnLines     : true,    

	initComponent: function(){
            this.columns = [
                Ext.create('Ext.grid.RowNumberer'),
                { header: 'Nama Item', dataIndex: 'id_item' },
                { header: 'Qty', dataIndex: 'qty' },
                { header: 'Harga Item', dataIndex: 'harga' },
                { header: 'Harga Total', dataIndex: 'total' }
            ];            
            this.callParent(arguments);
	}
});