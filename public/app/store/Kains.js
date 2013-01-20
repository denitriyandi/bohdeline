Ext.define('CrudExt.store.Kains',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Kains',
	pageSize	: 20,
	model		: 'CrudExt.model.Kains',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/kain/id_kain',
		    read    : base_url + 'welcome/getAll/kain',
		    update  : base_url + 'welcome/saveAll/kain/id_kain',
		    destroy : base_url + 'welcome/deleteAll/kain/id_kain'
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