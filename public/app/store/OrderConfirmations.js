Ext.define('CrudExt.store.OrderConfirmations',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'OrderConfirmations',
	pageSize	: 20,
	model		: 'CrudExt.model.OrderConfirmations',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/order_confirmation/id_oc',
		    read    : base_url + 'welcome/getAll/order_confirmation',
		    update  : base_url + 'welcome/saveAll/order_confirmation/id_oc',
		    destroy : base_url + 'welcome/deleteAll/order_confirmation/id_oc'
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