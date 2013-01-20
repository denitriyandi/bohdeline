Ext.define('CrudExt.model.Packings',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_packing','nama_packing','id_jenis_packing','id_warna_pabrik',
					'ukuran','bobot','satuan','stok','id_supplier','remark'],
	idProperty	: 'id_packing'
});