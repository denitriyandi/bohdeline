Ext.define('CrudExt.store.Packings',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Packings',
	pageSize	: 20,
	model		: 'CrudExt.model.Packings',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/packing/id_packing',
		    read    : base_url + 'welcome/getAll/packing',
		    update  : base_url + 'welcome/saveAll/packing/id_packing',
		    destroy : base_url + 'welcome/deleteAll/packing/id_packing'
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