Ext.define('CrudExt.store.BahanAnyams',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'BahanAnyams',
	pageSize	: 20,
	model		: 'CrudExt.model.BahanAnyams',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/plastik/id_plastik',
		    read    : base_url + 'welcome/getAll/plastik',
		    update  : base_url + 'welcome/saveAll/plastik/id_plastik',
		    destroy : base_url + 'welcome/deleteAll/plastik/id_plastik'
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