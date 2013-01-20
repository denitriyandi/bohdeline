Ext.define('CrudExt.model.Kains',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_kain','nama_kain','id_jenis_kain','id_warna_pabrik',
					'stok','satuan','id_supplier','remark' ],				
	idProperty	: 'id_kain'
});