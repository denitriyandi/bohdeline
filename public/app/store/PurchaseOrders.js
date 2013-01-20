Ext.define('CrudExt.store.PurchaseOrders',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'PurchaseOrders',
	pageSize	: 20,
	model		: 'CrudExt.model.PurchaseOrders',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/purchase_order/id_po',
		    read    : base_url + 'welcome/getAll/purchase_order',
		    update  : base_url + 'welcome/saveAll/purchase_order/id_po',
		    destroy : base_url + 'welcome/deleteAll/purchase_order/id_po'
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