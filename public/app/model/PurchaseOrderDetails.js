Ext.define('CrudExt.model.PurchaseOrderDetails',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_po','id_item','qty','harga','jumlah_diterima',{name: "total", convert: function(v, rec) { return rec.data.qty * rec.data.harga}} ],
	idProperty	: 'id_po'
});