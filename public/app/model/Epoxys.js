Ext.define('CrudExt.model.Epoxys',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_epoxy','nama_epoxy','id_jenis_epoxy','id_warna_pabrik',
					'id_tinner','warna','stok','satuan','id_supplier','harga','remark' ],
	idProperty	: 'id_epoxy'
});