Ext.define('CrudExt.store.KatItems',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'KatItems',
	pageSize	: 20,
	model		: 'CrudExt.model.KatItems',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/kategori_item/id_kategori',
		    read    : base_url + 'welcome/getAll/kategori_item',
		    update  : base_url + 'welcome/saveAll/kategori_item/id_kategori',
		    destroy : base_url + 'welcome/deleteAll/kategori_item/id_kategori'
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