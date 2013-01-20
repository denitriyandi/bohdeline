Ext.define('CrudExt.store.JenisBahanAnyams',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'JenisBahanAnyams',
	pageSize	: 20,
	model		: 'CrudExt.model.JenisBahanAnyams',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/Jenis_bahan_plastik/id_jenis_bahan_plastik',
		    read    : base_url + 'welcome/getAll/Jenis_bahan_plastik',
		    update  : base_url + 'welcome/saveAll/Jenis_bahan_plastik/id_jenis_bahan_plastik',
		    destroy : base_url + 'welcome/deleteAll/Jenis_bahan_plastik/id_jenis_bahan_plastik'
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