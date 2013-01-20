Ext.define('CrudExt.store.Spks',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Spks',
	pageSize	: 20,
	model		: 'CrudExt.model.Spks',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/spk/id_spk',
		    read    : base_url + 'welcome/getAll/spk',
		    update  : base_url + 'welcome/saveAll/spk/id_spk',
		    destroy : base_url + 'welcome/deleteAll/spk/id_spk'
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