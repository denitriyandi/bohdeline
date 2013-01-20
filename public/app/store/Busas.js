Ext.define('CrudExt.store.Busas',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Busas',
	pageSize	: 20,
	model		: 'CrudExt.model.Busas',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/busa/id_busa',
		    read    : base_url + 'welcome/getAll/busa',
		    update  : base_url + 'welcome/saveAll/busa/id_busa',
		    destroy : base_url + 'welcome/deleteAll/busa/id_busa'
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