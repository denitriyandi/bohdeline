Ext.define('CrudExt.store.JenisAnyams',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'JenisAnyams',
	pageSize	: 20,
	model		: 'CrudExt.model.JenisAnyams',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/jenis_anyam/id_jenis_anyam',
		    read    : base_url + 'welcome/getAll/jenis_anyam',
		    update  : base_url + 'welcome/saveAll/jenis_anyam/id_jenis_anyam',
		    destroy : base_url + 'welcome/deleteAll/jenis_anyam/id_jenis_anyam'
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