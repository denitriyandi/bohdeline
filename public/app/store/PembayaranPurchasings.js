Ext.define('CrudExt.store.PembayaranPurchasings',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'PembayaranPurchasings',
	pageSize	: 20,
	model		: 'CrudExt.model.PembayaranPurchasings',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/pembayaran_purchasing/id_pembayaran',
		    read    : base_url + 'welcome/getAll/pembayaran_purchasing',
		    update  : base_url + 'welcome/saveAll/pembayaran_purchasing/id_pembayaran',
		    destroy : base_url + 'welcome/deleteAll/pembayaran_purchasing/id_pembayaran'
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