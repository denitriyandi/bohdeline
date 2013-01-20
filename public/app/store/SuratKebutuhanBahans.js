Ext.define('CrudExt.store.SuratKebutuhanBahans',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'SuratKebutuhanBahans',
	pageSize	: 20,
	model		: 'CrudExt.model.SuratKebutuhanBahans',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/surat_kebutuhan_bahan/id_skb',
		    read    : base_url + 'welcome/getAll/surat_kebutuhan_bahan',
		    update  : base_url + 'welcome/saveAll/surat_kebutuhan_bahan/id_skb',
		    destroy : base_url + 'welcome/deleteAll/surat_kebutuhan_bahan/id_skb'
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