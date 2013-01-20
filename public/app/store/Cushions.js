Ext.define('CrudExt.store.Cushions',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Cushions',
	pageSize	: 20,
	model		: 'CrudExt.model.Cushions',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/cushion/id_cushion',
		    read    : base_url + 'welcome/getAll/cushion',
		    update  : base_url + 'welcome/saveAll/cushion/id_cushion',
		    destroy : base_url + 'welcome/deleteAll/cushion/id_cushion'
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