Ext.define('CrudExt.model.Frames',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_pipa','nama_pipa','id_jenis_pipa','id_warna_pabrik','ukuran','ketebalan',
					'diameter','stok','satuan','id_supplier','remark'],
	idProperty	: 'id_pipa'
});