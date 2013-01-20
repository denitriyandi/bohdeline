Ext.define('CrudExt.model.Cushions',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_cushion','nama_cushion','id_jenis_cushion','id_bahan_mentah','kebutuhan_bahan_mentah',
					'id_busa','kebutuhan_busa','id_kain','kebutuhan_kain','harga_jual'],
	idProperty	: 'id_cushion'
});