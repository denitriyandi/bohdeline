Ext.define('CrudExt.store.IndexItems',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'IndexItems',
	pageSize	: 20,
	model		: 'CrudExt.model.IndexItems',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/index_item/id_index',
		    read    : base_url + 'welcome/getAll/index_item',
		    update  : base_url + 'welcome/saveAll/index_item/id_index',
		    destroy : base_url + 'welcome/deleteAll/index_item/id_index'
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