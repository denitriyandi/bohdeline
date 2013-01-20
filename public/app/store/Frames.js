Ext.define('CrudExt.store.Frames',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Frames',
	pageSize	: 20,
	model		: 'CrudExt.model.Frames',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/pipa/id_pipa',
		    read    : base_url + 'welcome/getAll/pipa',
		    update  : base_url + 'welcome/saveAll/pipa/id_pipa',
		    destroy : base_url + 'welcome/deleteAll/pipa/id_pipa'
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