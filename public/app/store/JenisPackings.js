Ext.define('CrudExt.store.JenisPackings',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'JenisPackings',
	pageSize	: 20,
	model		: 'CrudExt.model.JenisPackings',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/jenis_packing/id_jenis_packing',
		    read    : base_url + 'welcome/getAll/jenis_packing',
		    update  : base_url + 'welcome/saveAll/jenis_packing/id_jenis_packing',
		    destroy : base_url + 'welcome/deleteAll/jenis_packing/id_jenis_packing'
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