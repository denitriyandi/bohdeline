Ext.define('CrudExt.store.Pengesubs',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Pengesubs',
	pageSize	: 20,
	model		: 'CrudExt.model.Pengesubs',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/pengesub/id_pengesub',
		    read    : base_url + 'welcome/getAll/pengesub',
		    update  : base_url + 'welcome/saveAll/pengesub/id_pengesub',
		    destroy : base_url + 'welcome/deleteAll/pengesub/id_pengesub'
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