Ext.define('CrudExt.store.LolosQCs',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'LolosQCs',
	pageSize	: 20,
	model		: 'CrudExt.model.LolosQCs',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/lolos_qc/id_lolos_qc',
		    read    : base_url + 'welcome/getAll/lolos_qc',
		    update  : base_url + 'welcome/saveAll/lolos_qc/id_lolos_qc',
		    destroy : base_url + 'welcome/deleteAll/lolos_qc/id_lolos_qc'
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