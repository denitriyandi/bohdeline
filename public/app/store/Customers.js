Ext.define('CrudExt.store.Customers',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Customers',
	pageSize	: 20,
	model		: 'CrudExt.model.Customers',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/customer/id_customer',
		    read    : base_url + 'welcome/getAll/customer',
		    update  : base_url + 'welcome/saveAll/customer/id_customer',
		    destroy : base_url + 'welcome/deleteAll/customer/id_customer'
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