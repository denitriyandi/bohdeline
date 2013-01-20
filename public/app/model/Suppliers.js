Ext.define('CrudExt.model.Suppliers',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_supplier','nama_supplier','id_kategori_supplier','alamat','telp','Hp','Fax','No_rek','email','keterangan' ],
	idProperty	: 'id_supplier'
});