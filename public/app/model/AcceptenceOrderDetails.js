Ext.define('CrudExt.model.AcceptenceOrderDetails',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_AO','id_item','jenis_item','qty','harga_total','total_kubikasi','total_kebutuhan_material',
					'total_kebutuhan_accesories','total_kebutuhan_pipa','total_kebutuhan_cushion','total_kebutuhan_packing','status' ],
	idProperty	: 'id_AO'
});