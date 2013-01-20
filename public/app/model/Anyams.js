Ext.define('CrudExt.model.Anyams',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_plastik','nama_plastik','id_jenis_bahan_plastik','lebar_plastik','id_warna_pabrik',
					'satuan_lebar_plastik','stok','satuan','id_supplier','harga','remark'],

	idProperty	: 'id_plastik'
});