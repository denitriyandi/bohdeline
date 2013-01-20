Ext.define('CrudExt.model.Customers',{
	extend		: 'Ext.data.Model',
	fields		: [ 'id_customer','nama_customer','company','destination','address','email','phone','Hp','No_rek','keterangan' ],
	idProperty	: 'id_customer'
});