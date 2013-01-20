Ext.define('CrudExt.store.Tinners',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Tinners',
	pageSize	: 20,
	model		: 'CrudExt.model.Tinners',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/tinner/id_tinner',
		    read    : base_url + 'welcome/getAll/tinner',
		    update  : base_url + 'welcome/saveAll/tinner/id_tinner',
		    destroy : base_url + 'welcome/deleteAll/tinner/id_tinner'
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