Ext.define('CrudExt.store.PenerimaanBarangs',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'PenerimaanBarangs',
	pageSize	: 20,
	model		: 'CrudExt.model.PenerimaanBarangs',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/penerimaan_barang/id_penerimaan_barang',
		    read    : base_url + 'welcome/getAll/penerimaan_barang',
		    update  : base_url + 'welcome/saveAll/penerimaan_barang/id_penerimaan_barang',
		    destroy : base_url + 'welcome/deleteAll/penerimaan_barang/id_penerimaan_barang'
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