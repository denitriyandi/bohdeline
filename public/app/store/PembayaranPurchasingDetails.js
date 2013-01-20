Ext.define('CrudExt.store.PembayaranPurchasingDetails',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'PembayaranPurchasingDetails',
	pageSize	: 20,
	model		: 'CrudExt.model.PembayaranPurchasingDetails',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/pembayaran_purchasing_detail',
		    read    : base_url + 'welcome/getAll/pembayaran_purchasing_detail',
		    update  : base_url + 'welcome/saveAll/pembayaran_purchasing_detail',
		    destroy : base_url + 'welcome/deleteAll/pembayaran_purchasing_detail'
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