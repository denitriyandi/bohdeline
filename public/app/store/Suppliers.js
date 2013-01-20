Ext.define('CrudExt.store.Suppliers',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Suppliers',
	pageSize	: 20,
	model		: 'CrudExt.model.Suppliers',
	proxy		: {
		type: 'ajax',		

		api: {
            create  : base_url + 'welcome/saveAll/supplier/id_supplier',
		    read    : base_url + 'welcome/getAll/supplier',
		    update  : base_url + 'welcome/saveAll/supplier/id_supplier',
		    destroy : base_url + 'welcome/deleteAll/supplier/id_supplier'
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
                    messageProperty : 'message',
                    id              : 'id_supplier'
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