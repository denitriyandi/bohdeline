Ext.define('CrudExt.model.PembayaranPurchasings',{
	extend		: 'Ext.data.Model',
	fields		: ['id_pembayaran','id_penerimaan_barang','tanggal','id_supplier'],
	idProperty	: 'id_pembayaran'
});