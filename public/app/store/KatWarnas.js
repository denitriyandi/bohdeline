Ext.define('CrudExt.store.KatWarnas',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'KatWarnas',
	pageSize	: 20,
	model		: 'CrudExt.model.KatWarnas',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/kategori_warna/id_kategori_warna',
		    read    : base_url + 'welcome/getAll/kategori_warna',
		    update  : base_url + 'welcome/saveAll/kategori_warna/id_kategori_warna',
		    destroy : base_url + 'welcome/deleteAll/kategori_warna/id_kategori_warna'
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