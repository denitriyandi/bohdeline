Ext.define('CrudExt.store.KatAksesoris',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'KatAksesoris',
	pageSize	: 20,
	model		: 'CrudExt.model.KatAksesoris',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/kategori_acc/id_kategori_acc',
		    read    : base_url + 'welcome/getAll/kategori_acc',
		    update  : base_url + 'welcome/saveAll/kategori_acc/id_kategori_acc',
		    destroy : base_url + 'welcome/deleteAll/kategori_acc/id_kategori_acc'
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