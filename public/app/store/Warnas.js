Ext.define('CrudExt.store.Warnas',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Warnas',
	pageSize	: 20,
	model		: 'CrudExt.model.Warnas',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/warna/id_warna_pabrik',
		    read    : base_url + 'welcome/getAll/warna',
		    update  : base_url + 'welcome/saveAll/warna/id_warna_pabrik',
		    destroy : base_url + 'welcome/deleteAll/warna/id_warna_pabrik'
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