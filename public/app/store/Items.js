Ext.define('CrudExt.store.Items',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Items',
	pageSize	: 20,
	model		: 'CrudExt.model.Items',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/item/id_item',
		    read    : base_url + 'welcome/getAll/item',
		    update  : base_url + 'welcome/saveAll/item/id_item',
		    destroy : base_url + 'welcome/deleteAll/item/id_item'
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