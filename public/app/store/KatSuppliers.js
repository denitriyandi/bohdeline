Ext.define('CrudExt.store.KatSuppliers',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'KatSuppliers',
	pageSize	: 20,
	model		: 'CrudExt.model.KatSuppliers',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/kategori_supplier/id_kategori_supplier',
		    read    : base_url + 'welcome/getAll/kategori_supplier',
		    update  : base_url + 'welcome/saveAll/kategori_supplier/id_kategori_supplier',
		    destroy : base_url + 'welcome/deleteAll/kategori_supplier/id_kategori_supplier'
		},
		actionMethods: {
            create  : 'POST',
		    read    : 'POST',
		    update  : 'POST',
		    destroy : 'POST'
		},
		reader: {
                    type            : 'json',
                    root            : 'data',
                    rootProperty    : 'data',
                    successProperty : 'success',
                    messageProperty : 'message'
		},
		writer: {
                    type            : 'json',
                    writeAllFields  : true,
                    root            : 'data',
                    encode          : true
		},
        listeners: {
            
        }
	}  
});