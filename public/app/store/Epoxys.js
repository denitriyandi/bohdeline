Ext.define('CrudExt.store.Epoxys',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Epoxys',
	pageSize	: 20,
	model		: 'CrudExt.model.Epoxys',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/epoxy/id_epoxy',
		    read    : base_url + 'welcome/getAll/epoxy',
		    update  : base_url + 'welcome/saveAll/epoxy/id_epoxy',
		    destroy : base_url + 'welcome/deleteAll/epoxy/id_epoxy'
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