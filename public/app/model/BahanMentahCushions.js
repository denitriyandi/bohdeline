Ext.define('CrudExt.model.BahanMentahCushions',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_bahan_mentah','nama_bahan_mentah','id_jenis_bahan_mentah',
					'ukuran','satuan','stok','id_supplier','remark' ],
	idProperty	: 'id_bahan_mentah'
});


