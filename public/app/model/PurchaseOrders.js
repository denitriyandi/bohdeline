Ext.define('CrudExt.model.PurchaseOrders',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_po','id_oc','id_supplier','tanggal_po','tanggal_selesai','ppn','status' ],
	idProperty	: 'id_po'
});