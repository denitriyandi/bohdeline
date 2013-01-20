Ext.define('CrudExt.store.LolosQCDetails',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'LolosQCDetails',
	pageSize	: 20,
	model		: 'CrudExt.model.LolosQCDetails',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/lolos_qc_detail/id_lolos_qc',
		    read    : base_url + 'welcome/getAll/lolos_qc_detail',
		    update  : base_url + 'welcome/saveAll/lolos_qc_detail/id_lolos_qc',
		    destroy : base_url + 'welcome/deleteAll/lolos_qc_detail/id_lolos_qc'
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