Ext.define('CrudExt.store.JenisPengesubs',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'JenisPengesubs',
	pageSize	: 20,
	model		: 'CrudExt.model.JenisPengesubs',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/jenis_pengesub/id_jenis_sub',
		    read    : base_url + 'welcome/getAll/jenis_pengesub',
		    update  : base_url + 'welcome/saveAll/jenis_pengesub/id_jenis_sub',
		    destroy : base_url + 'welcome/deleteAll/jenis_pengesub/id_jenis_sub'
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