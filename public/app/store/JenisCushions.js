Ext.define('CrudExt.store.JenisCushions',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'JenisCushions',
	pageSize	: 20,
	model		: 'CrudExt.model.JenisCushions',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/jenis_cushion/id_jenis_cushion',
		    read    : base_url + 'welcome/getAll/jenis_cushion',
		    update  : base_url + 'welcome/saveAll/jenis_cushion/id_jenis_cushion',
		    destroy : base_url + 'welcome/deleteAll/jenis_cushion/id_jenis_cushion'
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