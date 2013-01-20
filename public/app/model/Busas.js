Ext.define('CrudExt.model.Busas',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_busa','nama_busa','warna','dimensi','satuan_dimensi',
					'density','stok','id_supplier','remark' ],
	idProperty	: 'id_busa'
});