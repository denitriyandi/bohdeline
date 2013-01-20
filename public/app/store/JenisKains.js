Ext.define('CrudExt.store.JenisKains',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'JenisKains',
	pageSize	: 20,
	model		: 'CrudExt.model.JenisKains',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/jenis_kain/id_jenis_kain',
		    read    : base_url + 'welcome/getAll/jenis_kain',
		    update  : base_url + 'welcome/saveAll/jenis_kain/id_jenis_kain',
		    destroy : base_url + 'welcome/deleteAll/jenis_kain/id_jenis_kain'
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