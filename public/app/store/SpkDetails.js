Ext.define('CrudExt.store.SpkDetails',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'SpkDetails',
	pageSize	: 20,
	model		: 'CrudExt.model.SpkDetails',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/spk_detail/id_spk',
		    read    : base_url + 'welcome/getAll/spk_detail',
		    update  : base_url + 'welcome/saveAll/spk_detail/id_spk',
		    destroy : base_url + 'welcome/deleteAll/spk_detail/id_spk'
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