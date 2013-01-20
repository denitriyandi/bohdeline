Ext.define('CrudExt.model.Aksesoris',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_acc','nama_acc','id_kategori_acc','id_warna_pabrik','ukuran',
					'satuan','id_supplier','stok','harga_jual','harga_beli','remark' ],
	idProperty	: 'id_acc'
});