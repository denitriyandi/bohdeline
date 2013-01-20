Ext.define('CrudExt.store.JenisFrames',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'JenisFrames',
	pageSize	: 20,
	model		: 'CrudExt.model.JenisFrames',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/jenis_pipa/id_jenis_pipa',
		    read    : base_url + 'welcome/getAll/jenis_pipa',
		    update  : base_url + 'welcome/saveAll/jenis_pipa/id_jenis_pipa',
		    destroy : base_url + 'welcome/deleteAll/jenis_pipa/id_jenis_pipa'
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