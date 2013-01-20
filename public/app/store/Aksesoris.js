Ext.define('CrudExt.store.Aksesoris',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'Aksesoris',
	pageSize	: 20,
	model		: 'CrudExt.model.Aksesoris',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/accesories/id_acc',
		    read    : base_url + 'welcome/getAll/accesories',
		    update  : base_url + 'welcome/saveAll/accesories/id_acc',
		    destroy : base_url + 'welcome/deleteAll/accesories/id_acc'
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