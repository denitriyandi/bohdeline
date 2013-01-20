Ext.define('CrudExt.store.AcceptenceOrderDetails',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'AcceptenceOrderDetails',
	pageSize	: 20,
	model		: 'CrudExt.model.AcceptenceOrderDetails',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/acceptence_order_detail/id_AO',
		    read    : base_url + 'welcome/getAll/acceptence_order_detail',
		    update  : base_url + 'welcome/saveAll/acceptence_order_detail/id_AO',
		    destroy : base_url + 'welcome/deleteAll/acceptence_order_detail/id_AO'		    
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