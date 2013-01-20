Ext.define('CrudExt.store.KatEpoxys',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'KatEpoxys',
	pageSize	: 20,
	model		: 'CrudExt.model.KatEpoxys',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/jenis_epoxy/id_jenis_epoxy',
		    read    : base_url + 'welcome/getAll/jenis_epoxy',
		    update  : base_url + 'welcome/saveAll/jenis_epoxy/id_jenis_epoxy',
		    destroy : base_url + 'welcome/deleteAll/jenis_epoxy/id_jenis_epoxy'
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