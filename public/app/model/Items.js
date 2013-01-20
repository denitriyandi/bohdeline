Ext.define('CrudExt.model.Items',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_item','nama_item','id_index','id_kategori','id_cushion','id_packing','kebutuhan_cushion',
					'kebutuhan_packing','id_warna_pabrik','url_warna_anyam','url_gambar','dimensi','seatwidth',
					'seatheight','seatdept','armheight','satuan_dimensi','kubikasi','id_jenis_anyam','stok',
					'harga_jasa_anyam','harga_jasa_rangka_bending','harga_jasa_rangka_las','harga_jasa_cushion',
					'harga_jasa_packing','harga_item' ],
	idProperty	: 'id_item'
});

