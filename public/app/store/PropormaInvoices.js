Ext.define('CrudExt.store.PropormaInvoices',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'PropormaInvoices',
	pageSize	: 20,
	model		: 'CrudExt.model.PropormaInvoices',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/proporma_invoice/id_pi',
		    read    : base_url + 'welcome/getAll/proporma_invoice',
		    update  : base_url + 'welcome/saveAll/proporma_invoice/id_pi',
		    destroy : base_url + 'welcome/deleteAll/proporma_invoice/id_pi'
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